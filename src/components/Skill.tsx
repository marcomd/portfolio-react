import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { SharedContext } from "../contexts/SharedContext";

type Props = {
  name: string;
  logo: string;
  level: number;
}

export default function Skill({name, logo, level}: Props) {
  const { mobile } = useContext(SharedContext)
  const { t } = useTranslation();

  return (
    <div className="skill-container">
      <div className="skill-row">
        <div className="logo"><img src={logo} alt={name} /></div>
        <div className="name">{name}</div>
      </div>
      <div className="skill-row">
        <div className="skill-level">
          <div className={`skill-level-bar level-${level}`}></div>
        </div>
      </div>
    </div>
  )
}
