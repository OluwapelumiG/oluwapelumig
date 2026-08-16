import Link from "next/link";
import Image from "next/image";
import {
  description,
  familyName,
  fullName,
  givenNames,
  jobTitle,
} from "./data/identity";

export default function Cover(): JSX.Element {
  return (
    <div className="cover-face">
      <p className="cover-kicker">Systems log · Lagos</p>
      <div className="cover-grid">
        <figure className="cover-plate">
          <Image
            src="/images/DSC.jpg"
            alt={fullName}
            width={560}
            height={747}
          />
        </figure>
        <div className="cover-copy">
          <h1>
            {familyName},
            <span>{givenNames}</span>
          </h1>
          <p className="cover-role">{jobTitle}</p>
          <p className="cover-summary">{description}</p>
          <p className="cover-lede">
            Five years on the web. Two on mobile. APIs, clients, and the
            infrastructure between them.
          </p>
          <nav className="cover-toc" aria-label="Contents">
            <Link href="/work">Work</Link>
            <Link href="/notes">Notes</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <p className="cover-open">
            <Link href="/work">View source →</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
