import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { SharedContext } from "../contexts/SharedContext";

type Props = {
  name: string;
  startOn: string;
  endOn: string;
  logo: string;
}

export default function Project({name, startOn, endOn, logo}: Props) {
  const { mobile } = useContext(SharedContext)
  const { t } = useTranslation();

  return (
    <div className="project-card">
      <div className="project-logo">
        <img src={`/projects/${logo}`} alt="project-logo" />
      </div>
      <div className="project-text">
        <div className="title">
          <div className="name">{t(`projects.${name}.title`)}</div>
          <div className="date">{startOn} - {endOn}</div>
        </div>
        <div className="separator"></div>
        <div className="description">{t(`projects.${name}.description`)}</div>
      </div>
    </div>
  )
}
