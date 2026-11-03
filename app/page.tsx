import type { CSSProperties } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { experience, profile, projects } from "@/lib/data";

const accent = (color: string) => ({ "--c": color }) as CSSProperties;

export default function Home() {
  return (
    <>
      {/* Applies the saved theme before first paint to avoid a flash */}
      <script
        dangerouslySetInnerHTML={{
          __html: `try{var t=localStorage.getItem("theme");if(t)document.documentElement.setAttribute("data-theme",t)}catch(e){}`,
        }}
      />
      <div className="wrap">
        <ThemeToggle />

        <header className="block head">
          <div className="label" />
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="avatar" src="/avatar.png" alt={profile.name} width={72} height={72} />
            <h1 className="me">{profile.name}</h1>
            <p className="role">{profile.title}</p>
          </div>
        </header>

        <section className="block">
          <div className="label">About</div>
          <div>
            <p>{profile.about}</p>
          </div>
        </section>

        <section className="block">
          <div className="label">Now</div>
          <div>
            <p>
              Open to internships and new projects.{" "}
              <a className="hl" style={accent("#ffc61a")} href={`mailto:${profile.email}`}>
                pranavshewale131@gmail.com
              </a>
              , or find me on{" "}
              <a className="hl" style={accent("#8b7bff")} href={profile.github}>
                GitHub
              </a>{" "}
              and{" "}
              <a className="hl" style={accent("#223aee")} href={profile.linkedin}>
                LinkedIn
              </a>
              </a>{" "}
              and{" "}
              <a className="hl" style={accent("#00ddff")} href={profile.x}>
                X
              </a>
              .
            </p>
          </div>
        </section>

        <section className="block">
          <div className="label">Projects</div>
          <ul className="rows">
            {projects.map((p) => (
              <li key={p.name}>
                <a className="row" style={accent(p.color)} href={p.href}>
                  <span className="badge">[{p.badge}]</span>
                  <span className="name">{p.name} ↗</span>
                  <span className="desc">{p.desc}</span>
                  <span className="tag">{p.tag}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="block">
          <div className="label">Work</div>
          <ul className="rows">
            {experience.map((e) => (
              <li key={e.name}>
                <div className="row" style={accent(e.color)}>
                  <span className="badge">[{e.badge}]</span>
                  <span className="name">{e.name}</span>
                  <span className="desc">
                    {e.desc}
                    <span className="sub">{e.period}</span>
                  </span>
                  <span className="tag">{e.role}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="block">
          <div className="label">Education</div>
          <div>
            <p>
              {profile.education} <span className="muted">{profile.educationPeriod}</span>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
