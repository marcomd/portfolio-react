import { useContext } from "react";

import { useTranslation } from "react-i18next";
import { SharedContext } from "../contexts/SharedContext";
import Project from "./Project";

export default function Skills() {
  const { mobile } = useContext(SharedContext)
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <h2>{t('projects.title')}</h2>
        <div>{t('projects.body')}</div>
      </div>
      <div className="projects-container">
        <Project name="Tracking manager" description="Il mio progetto1..." startOn="14/11/2022" endOn="Oggi"></Project>
        <Project name="Tracking manager" description="Il mio progetto2..." startOn="01/04/2022" endOn="31/10/2022"></Project>
      </div>
    </div>
  );
}
