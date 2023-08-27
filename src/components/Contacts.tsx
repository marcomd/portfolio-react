import { useContext } from "react";

import { useTranslation } from "react-i18next";
import { SharedContext } from "../contexts/SharedContext";


export default function Contacts() {
  const { mobile } = useContext(SharedContext)
  const { t } = useTranslation();
  const writeUsTemplate = `mailto:m.mastrodonato+portfolio@gmail.com?subject=Greetings!&body=Dear Marco,%0D%0A%0D%0A[insert cute message here] 😍`

  return (
    <div className="contacts-wrapper">
      <div>
        <h2>{t('contacts.title')}</h2>
        <div>{t('contacts.body')}</div>
      </div>
      <div className="contacts-container">
        <ul>
          <li><a href="https://www.linkedin.com/in/marcomastrodonato">Linkedin</a></li>
          <li><a href={writeUsTemplate}>Email</a></li>
        </ul>
      </div>
    </div>
  );
}
