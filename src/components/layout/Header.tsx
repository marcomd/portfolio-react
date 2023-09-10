import { useContext, useState } from "react";
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
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenuVisible = () => {
    setMenuVisible( visible => !visible)
  }

  return (
    <header>
      <h2 className="logo">{children}</h2>
      <button className="toggle" onClick={toggleMenuVisible}><span className="material-icons">menu</span></button>
      <nav className={`navigation ${menuVisible && 'visible'}`}>
        { menuVisible &&
          <div><button className="toggle" onClick={toggleMenuVisible}><span className="material-icons">close</span></button></div>
        }
        <div>          
          <Link to="/" onClick={() => setMenuVisible(false)}>{t('menu.home')}</Link>
          <Link to="/skills" onClick={() => setMenuVisible(false)}>{t('menu.skills')}</Link>
          <Link to="/projects" onClick={() => setMenuVisible(false)}>{t('menu.projects')}</Link>
          <Link to="/contacts" onClick={() => setMenuVisible(false)}>{t('menu.contacts')}</Link>
        </div>
      </nav>

      <div className="selectors">
        <LocaleSelector />
        <DarkmodeSelector />
      </div>
    </header>
  );
}
