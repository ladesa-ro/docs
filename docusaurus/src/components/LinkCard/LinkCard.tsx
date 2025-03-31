import DocCard from "@theme/DocCard";
import React from "react";
import { useXDocUrl } from "../../hooks/useDocUrl";

interface LinkCardProps {
  title: string;
  description?: string;

  docId: string;
}

export const LinkCard: React.FC<LinkCardProps> = ({
  docId,
  title,
  description,
}) => {
  const href = useXDocUrl(docId);

  return (
    <div style={{ marginTop: "1.25rem" }}>
      <DocCard
        item={{
          href,
          type: "link",
          label: title,
          description,
        }}
      />
    </div>
  );
};

export const LinkCardList: React.FC<{ items: LinkCardProps[] }> = ({
  items,
}) => {
  return (
    <div style={{ marginTop: "1.25rem" }}>
      {items.map((item) => (
        <LinkCard key={item.title} {...item} />
      ))}
    </div>
  );
};
