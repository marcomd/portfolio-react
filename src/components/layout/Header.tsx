import { useContext } from "react";
import { SharedContext } from "../../contexts/SharedContext";
import { useTranslation } from "react-i18next";
import LocaleSelector from "../base/LocaleSelector";
import DarkmodeSelector from "../base/DarkmodeSelector";

import { Link } from 'react-router-dom';

interface Props {
  children: string;
}

export default function Header({ children }: Props) {
  const { mobile } = useContext(SharedContext)
  const { t } = useTranslation();

  return (
    <header>
      <h2 className="logo">{children}</h2>
      <nav className="navigation">
        <Link to="/">{t('menu.home')}</Link>
        <Link to="/skills">{t('menu.skills')}</Link>
        <Link to="/projects">{t('menu.projects')}</Link>
        <Link to="/contacts">{t('menu.contacts')}</Link>
      </nav>

      <div className="selectors">
        <LocaleSelector />
        <DarkmodeSelector />
      </div>
    </header>
  );
}
