import jetpack from "fs-jetpack";
import path from "node:path";
import { fileURLToPath } from "node:url";
import PQueue from "p-queue";
import pRetry from "p-retry";

const here = path.dirname(fileURLToPath(new URL(import.meta.url)));

const contentRemoteJsonPath = path.join(here, "../src/content/remote.json");

type IRemoteContent = {
  filename: string;
  url: string;
};

function* getRemoteContents(): Iterable<IRemoteContent> {
  const contentRemoteJson = jetpack.read(contentRemoteJsonPath, "json");

  for (const entry of Object.entries(contentRemoteJson)) {
    const filename = entry[0] as string;
    const url = entry[1] as string;

    yield { filename, url };
  }
}

async function downloadRemoteContent(remoteContent: IRemoteContent) {
  console.log(`baixando ${remoteContent.filename}...`);

  const response = await fetch(remoteContent.url);
  const data = await response.text();

  const destination = path.join(path.dirname(contentRemoteJsonPath), `${remoteContent.filename}`);

  jetpack.write(destination, data);
  console.log(`salvo ${remoteContent.filename}`);
}

async function downloadRemoteContents(remoteContents: Iterable<IRemoteContent>) {
  const queue = new PQueue({ concurrency: 5 });

  for (const remoteContent of remoteContents) {
    queue.add(() =>
      pRetry(() => downloadRemoteContent(remoteContent), {
        retries: 5,
        minTimeout: 1000,
      })
    );
  }

  await queue.onIdle();
}

function main() {
  downloadRemoteContents(getRemoteContents());
}

main();
