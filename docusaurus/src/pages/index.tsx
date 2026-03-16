import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import {
  BookOpen,
  Boxes,
  Building2,
  Calendar,
  ChevronDown,
  Code2,
  FileText,
  GraduationCap,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import type { ReactNode } from "react";

import useBaseUrl from "@docusaurus/useBaseUrl";
import { useXDocEntrypointUrl } from "../hooks/useDocUrl";
import styles from "./index.module.css";

function Hero() {
  const docsEntrypointUrl = useXDocEntrypointUrl();
  const heroLogoUrl = useBaseUrl("/img/ladesa-hero.svg");

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <img
          src={heroLogoUrl}
          alt="Ladesa"
          className={styles.heroLogo}
          width={120}
          height={120}
        />
        <h1 className={styles.heroTitle}>Ladesa</h1>
        <p className={styles.heroSubtitle}>
          Documentação do Laboratório de Desenvolvimento de Softwares Acadêmicos
        </p>
        <p className={styles.heroDescription}>
          Solução gratuita e open-source para geração de horários acadêmicos
          e gestão de ambientes
        </p>
        <div className={styles.heroCtas}>
          <Link to={docsEntrypointUrl} className={styles.ctaPrimary}>
            Explorar Documentação
          </Link>
          <Link
            to="https://github.com/ladesa-ro"
            className={styles.ctaSecondary}
          >
            GitHub
          </Link>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <ChevronDown size={28} />
      </div>
    </section>
  );
}

function Systems() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Sistemas</h2>
      <p className={styles.sectionSubtitle}>
        Dois sistemas integrados para a gestão acadêmica
      </p>
      <div className={`${styles.cardGrid} ${styles.cardGrid2}`}>
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            <Calendar size={32} />
          </div>
          <h3 className={styles.cardTitle}>SISGHA</h3>
          <p className={styles.cardDescription}>
            Geração de Horário Acadêmico — Automatiza a criação de grades de
            horário respeitando restrições pedagógicas, PRD, aulas germinadas e
            três turnos nativos.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            <Building2 size={32} />
          </div>
          <h3 className={styles.cardTitle}>SISGEA</h3>
          <p className={styles.cardDescription}>
            Gestão de Ambientes — Gerencia blocos, salas e laboratórios com
            controle de disponibilidade integrado ao horário.
          </p>
        </div>
      </div>
    </section>
  );
}

function Audience() {
  const personas = [
    {
      icon: <ShieldCheck size={28} />,
      title: "DAPE",
      description:
        "Coordenadores que orquestram a geração e ajustam a grade",
    },
    {
      icon: <GraduationCap size={28} />,
      title: "Professor",
      description:
        "Docentes que consultam horários e disponibilidade",
    },
    {
      icon: <BookOpen size={28} />,
      title: "Aluno",
      description: "Estudantes que acessam o horário da turma",
    },
    {
      icon: <Code2 size={28} />,
      title: "Desenvolvedor",
      description:
        "Quem contribui com código, integrações e melhorias",
    },
  ];

  return (
    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <h2 className={styles.sectionTitle}>Para quem</h2>
      <p className={styles.sectionSubtitle}>
        Documentação pensada para cada perfil de usuário
      </p>
      <div className={`${styles.cardGrid} ${styles.cardGrid4}`}>
        {personas.map((p) => (
          <div key={p.title} className={styles.card}>
            <div className={styles.cardIcon}>{p.icon}</div>
            <h3 className={styles.cardTitle}>{p.title}</h3>
            <p className={styles.cardDescription}>{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhyExists() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Por que o Ladesa existe</h2>
      <p className={styles.sectionSubtitle}>
        Montar horários acadêmicos não deveria ser tão difícil
      </p>
      <div className={styles.whyContent}>
        <blockquote className={styles.quote}>
          &ldquo;A gente já passou por tanto susto nesse horário que a gente
          fica... melhor não mexer.&rdquo;
          <span className={styles.quoteAuthor}>— DAPE</span>
        </blockquote>
        <ul className={styles.gapList}>
          <li className={styles.gapItem}>
            <Calendar size={20} className={styles.gapIcon} />
            <div className={styles.gapText}>
              <strong>Processo manual e demorado</strong>
              A montagem da grade exige múltiplas etapas sem auxílio
              inteligente. A solução do Ladesa gera horários automaticamente respeitando
              todas as restrições.
            </div>
          </li>
          <li className={styles.gapItem}>
            <ShieldCheck size={20} className={styles.gapIcon} />
            <div className={styles.gapText}>
              <strong>Falta de controle</strong>
              Ajustes manuais se perdem a cada nova geração. A solução do Ladesa permite
              travar células editadas e distinguir alterações temporárias de
              permanentes.
            </div>
          </li>
          <li className={styles.gapItem}>
            <Boxes size={20} className={styles.gapIcon} />
            <div className={styles.gapText}>
              <strong>Informação fragmentada</strong>
              Horários, salas e calendários vivem em sistemas separados. As
              soluções do Ladesa integram tudo em uma plataforma web e mobile
              acessível a todos.
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Explore() {
  const docsEntrypointUrl = useXDocEntrypointUrl();

  const links = [
    {
      icon: <FileText size={28} />,
      title: "Produto & Requisitos",
      description:
        "Visão geral, domínio, processos, epics, user stories e requisitos funcionais",
      to: "/docs/produto/visao-geral",
    },
    {
      icon: <Wrench size={28} />,
      title: "Guia para Desenvolvedores",
      description: "Setup de ambiente, tutoriais, integração e deploy",
      to: "/docs/desenvolvimento",
    },
    {
      icon: <Boxes size={28} />,
      title: "Arquitetura",
      description: "ADRs, fluxo de dados e decisões técnicas",
      to: docsEntrypointUrl,
    },
  ];

  return (
    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <h2 className={styles.sectionTitle}>Explore</h2>
      <p className={styles.sectionSubtitle}>
        Navegue pela documentação por área de interesse
      </p>
      <div className={`${styles.cardGrid} ${styles.cardGrid3}`}>
        {links.map((l) => (
          <Link key={l.title} to={l.to} className={styles.card}>
            <div className={styles.cardIcon}>{l.icon}</div>
            <h3 className={styles.cardTitle}>{l.title}</h3>
            <p className={styles.cardDescription}>{l.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Ladesa Docs"
      description="Documentação do Laboratório de Desenvolvimento de Softwares Acadêmicos"
    >
      <main>
        <Hero />
        <Systems />
        <Audience />
        <WhyExists />
        <Explore />
      </main>
    </Layout>
  );
}
