import type { Metadata } from "next";
import Image from "next/image";
import {
  email,
  fullName,
  githubUrl,
  jobTitle,
  linkedInUrl,
} from "../data/identity";

export const metadata: Metadata = {
  title: "About",
};

const stack = {
  languages: ["PHP", "JavaScript", "TypeScript", "Python"],
  frameworks: ["Laravel", "React", "Next.js", "Vue.js", "Node.js", "CodeIgniter", "Django"],
  databases: ["MySQL", "PostgreSQL", "MongoDB", "GraphQL"],
  tools: ["Git", "Docker", "AWS", "Google Cloud"],
};

const experience = [
  {
    place: "Flyte Technologies, Lagos",
    detail: "Web Developer (Remote) · May 2023 – Present",
  },
  {
    place: "Federal University Lokoja",
    detail: "Web Developer · June 2020 – October 2024",
  },
];

const education = [
  {
    place: "Federal University Lokoja",
    detail: "B.Sc. Computer Science · August 2024",
  },
  {
    place: "Kogi State Polytechnic",
    detail: "National Diploma in Computer Science · August 2020",
  },
];

export default function AboutPage(): JSX.Element {
  return (
    <>
      <div className="hero">
        <figure className="specimen">
          <span className="tape" aria-hidden />
          <span className="tape alt" aria-hidden />
          <Image
            src="/images/DSC.jpg"
            alt={fullName}
            width={560}
            height={747}
          />
          <figcaption>Fig. 1 — operator</figcaption>
        </figure>
        <div className="intro">
          <h1>
            Systems
            <span>and stack</span>
          </h1>
          <p className="role">{jobTitle} · Lagos</p>
          <p className="lede">
            Five years on the web. Two on mobile. APIs, clients, and the
            infrastructure between them.
          </p>
        </div>
      </div>

      <p className="methods">
        I design and ship full-stack systems — frontend, backend, and data
        layer. TypeScript, SQL, containers, and cloud to keep services secure,
        efficient, and scalable.
      </p>
      <p className="methods" style={{ marginTop: "1rem" }}>
        12 Alli Olusegun Street, Ayobo, Lagos · {email} · +234 906 632 4943,
        +234 812 924 1613
      </p>
      <p className="mail" style={{ marginTop: "1rem" }}>
        <a href={githubUrl} rel="me noreferrer">
          GitHub
        </a>
        <a href={linkedInUrl} rel="me noreferrer">
          LinkedIn
        </a>
      </p>

      <h2>Experience</h2>
      {experience.map((item) => (
        <div key={item.place} className="log">
          <span className="exp">EX</span>
          <span>
            <strong>{item.place}</strong>
            <p>{item.detail}</p>
          </span>
        </div>
      ))}

      <h2>Education</h2>
      {education.map((item) => (
        <div key={item.place} className="log">
          <span className="exp">ED</span>
          <span>
            <strong>{item.place}</strong>
            <p>{item.detail}</p>
          </span>
        </div>
      ))}

      <h2>Stack</h2>
      {Object.entries(stack).map(([group, items]) => (
        <div key={group} className="stack-row">
          <span className="exp">{group}</span>
          <p className="reagents">{items.join(" · ")}</p>
        </div>
      ))}
    </>
  );
}
