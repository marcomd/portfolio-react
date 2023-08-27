import { useContext } from "react";

import { useTranslation } from "react-i18next";
import { SharedContext } from "../contexts/SharedContext";
import Project from "./Project";

export default function Skills() {
  const { mobile } = useContext(SharedContext)
  const { t } = useTranslation();

  return (
    <div className="projects-wrapper">
      <div>
        <h2>{t('projects.title')}</h2>
      </div>
      <div className="projects-container">
        <Project name="iubenda_tracking" startOn="14/11/2022" endOn="Oggi" logo="iubenda.png"></Project>
        <Project name="foodcircle" startOn="01/04/2022" endOn="31/10/2022" logo="foodcircle.svg"></Project>
        <Project name="fractalgarden_otpservice" startOn="01/04/2020" endOn="31/03/2022" logo="fractalgarden_otpservice.svg"></Project>
        <Project name="fractalgarden_italianway" startOn="01/02/2019" endOn="31/03/2020" logo="fractalgarden_italianway.svg"></Project>
        <Project name="fractalgarden_homy" startOn="16/02/2017" endOn="31/01/2019" logo="fractalgarden_homy.png"></Project>
        <Project name="ergoprevidenza" startOn="01/01/2007" endOn="15/02/2017" logo="ergoprevidenza.jpg"></Project>
        <Project name="bayerische" startOn="01/05/2000" endOn="31/12/2006" logo="bayerische.png"></Project>
        <Project name="consor" startOn="01/09/1999" endOn="30/04/2000" logo="consor.jpg"></Project>
        <Project name="ibm" startOn="01/03/1998" endOn="31/08/1999" logo="ibm.png"></Project>
      </div>
    </div>
  );
}
