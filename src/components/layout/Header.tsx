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
      <button className="toggle open" onClick={toggleMenuVisible}><span className="material-symbols-outlined">menu</span></button>
      <nav className={`navigation ${menuVisible && 'visible'}`}>
        <div>
          { menuVisible &&
            <button className="toggle" onClick={toggleMenuVisible}><span className="material-symbols-outlined">close</span></button>
          }
          <Link to="/" onClick={toggleMenuVisible}><span className="material-symbols-outlined only-mobile">domino_mask</span> &nbsp;{t('menu.home')}</Link>
          <Link to="/skills" onClick={toggleMenuVisible}><span className="material-symbols-outlined only-mobile">electric_bolt</span> &nbsp;{t('menu.skills')}</Link>
          <Link to="/projects" onClick={toggleMenuVisible}><span className="material-symbols-outlined only-mobile">cases</span> &nbsp;{t('menu.projects')}</Link>
          <Link to="/contacts" onClick={toggleMenuVisible}><span className="material-symbols-outlined only-mobile">alternate_email</span> &nbsp;{t('menu.contacts')}</Link>
        </div>
      </nav>

      <div className="selectors">
        <LocaleSelector />
        <DarkmodeSelector />
      </div>
    </header>
  );
}
