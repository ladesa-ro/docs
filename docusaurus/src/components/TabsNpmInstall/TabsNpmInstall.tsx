import CodeBlock from "@theme/CodeBlock";
import TabItem from "@theme/TabItem";
import Tabs from "@theme/Tabs";

type Props = {
  packages: string;
};

const pkgManagers = [
  {
    key: "npm",
    command: (packages: string) => {
      return `npm install ${packages}`;
    },
  },
  {
    key: "yarn",
    command: (packages: string) => {
      return `yarn add ${packages}`;
    },
  },
  {
    key: "pnpm",
    command: (packages: string) => {
      return `pnpm install ${packages}`;
    },
  },
  {
    key: "bun",
    command: (packages: string) => {
      return `bun add ${packages}`;
    },
  },
];

export const TabsNpmInstall = (props: Props) => {
  const tabs = pkgManagers.map((pkgManager) => {
    return (
      <TabItem
        key={pkgManager.key}
        value={pkgManager.key}
        label={pkgManager.key}
      >
        <CodeBlock language="sh">
          {pkgManager.command(props.packages)}
        </CodeBlock>
      </TabItem>
    );
  });

  return <Tabs children={tabs} />;
};
