import { useReducer, useState, useEffect, useRef, useContext } from "react";
import { numberFormatter } from "../lib/utility";
import { DEBOUNCE_TIMEOUT } from "../lib/constants";

import { useTranslation } from "react-i18next";
import { SharedContext } from "../contexts/SharedContext";

export default function Home() {
  const { mobile } = useContext(SharedContext)
  const { t } = useTranslation();



  useEffect(() => {
  }, []);

  return (
    <div className="home-container">
      <div className="logo">
        
        <img src="home.jpg" alt="Portrait" />
      </div>
      <div className="description">
        <h2 className="title">{t('home.title')}</h2>
        <div className="body">{t('home.body')}</div>
      </div>
    </div>
  );
}
