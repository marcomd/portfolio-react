import { useContext } from "react";

import { useTranslation } from "react-i18next";
import { SharedContext } from "../contexts/SharedContext";
import Skill from "./Skill";

export default function Skills() {
  const { mobile } = useContext(SharedContext)
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <h2>{t('skills.title')}</h2>
        <div>{t('skills.body')}</div>
      </div>
      <div className="skills-container">
        <Skill name="Ruby" logo="ruby.png" level={100}></Skill>
        <Skill name="Ruby on Rails" logo="rails.png" level={100}></Skill>
        <Skill name="Html" logo="html5.png" level={90}></Skill>
        <Skill name="Css" logo="css3.png" level={70}></Skill>
        <Skill name="Javascript" logo="js.png" level={80}></Skill>
        <Skill name="Typescript" logo="ts.png" level={80}></Skill>
        <Skill name="VueJs" logo="vuejs.png" level={80}></Skill>
        <Skill name="React" logo="react.png" level={80}></Skill>
      </div>
    </div>
  );
}
