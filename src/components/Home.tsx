import { useReducer, useState, useEffect, useRef, useContext } from "react";
import { numberFormatter } from "../lib/utility";
import { DEBOUNCE_TIMEOUT } from "../lib/constants";

import { useTranslation } from "react-i18next";
import { SharedContext } from "../contexts/SharedContext";

import LogoCanvas from "./LogoCanvas";

export default function Home() {
  const { mobile } = useContext(SharedContext)
  const { t } = useTranslation();



  useEffect(() => {
  }, []);

  return (
    <div className="home-wrapper">
      <div className="logo">
        <LogoCanvas></LogoCanvas>
      </div>
      <div className="description">
        <h2 className="title">{t('home.title')}</h2>
        <div className="body">{t('home.introduction')}</div>
        <br /><hr /><br />
        <div className="body">{t('home.career')}</div>
        <br />
        <div className="body">{t('home.personality')}</div>
        <br />
        <br />
        <div className="body">{t('home.hobbies')}</div>
        <br />
        <div className="body">{t('home.notes')}</div>
      </div>
    </div>
  );
}
