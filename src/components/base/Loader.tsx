// http://osadcha.kh.ua/projects/loaders/
// https://github.com/MarinaOsadcha/Preloaders/blob/master/index.html
// Available: flower-01 flower-02 flower-04 circle-05
import './Loader.css';

import {
  useState
} from "react";

export default function Loader() {
  const [darkmode, setDarkmode] = useState(false);

  return (
    <div className={`loader-flex ${darkmode && 'dark-mode'}`}>
      <div className="loader circle-05">
        <div className='loader-container'>
          <div className='circle'></div>
        </div>
      </div>
    </div>
  );
}