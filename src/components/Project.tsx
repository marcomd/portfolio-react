import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { SharedContext } from "../contexts/SharedContext";

type Props = {
  name: string;
  description: string;
  startOn: string;
  endOn: string;
}

export default function Project({name, description, startOn, endOn}: Props) {
  const { mobile } = useContext(SharedContext)
  const { t } = useTranslation();

  return (
    <div className="project-card">
      <div className="title">
        <div className="name">{name}</div>
        <div className="date">{startOn} - {endOn}</div>
      </div>
      <div className="separator"></div>
      <div className="description">{description}</div>
    </div>
  )
}
