import { useLatestVersion } from "@docusaurus/plugin-content-docs/lib/client/index.js";
import { useMemo } from "react";

export const useXDocUrl = (docId: string) => {
  const version = useLatestVersion(undefined);

  const doc = useMemo(
    () => version.docs.find((doc) => doc.id === docId),
    [docId],
  );

  // useEffect(() => {
  //   console.debug("available docs:", version.docs);
  // }, [version]);

  if (!doc) {
    throw new Error(`doc with id not found: ${docId}`);
  }

  return doc.path;
};

export const useXDocEntrypointUrl = () => {
  const version = useLatestVersion(undefined);
  return useXDocUrl(version.mainDocId);
};
