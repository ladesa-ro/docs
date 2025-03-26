import { ArrowRight } from "lucide-react";
import React from "react";
import styles from "./LinkCard.module.css"; // Importando o CSS Module

interface LinkCardProps {
  href: string;
  title: string;
  description?: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ href, title, description }) => {
  return (
    <a className={styles.linkCard} href={href}>
      <div className={styles.textContainer}>
        <span className={styles.title}>{title}</span>
        {description && <span className={styles.description}>{description}</span>}
      </div>
      <div className={styles.icon}>
        <ArrowRight />
      </div>
    </a>
  );
};

export default LinkCard;
