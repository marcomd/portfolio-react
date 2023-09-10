import { ErrorBoundary } from "react-error-boundary";
import { GenericErrorFallback } from "./Errors";

import Main from "./Main";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

import { useTranslation } from "react-i18next";
import useWindowMobile from "../hooks/useWindowMobile";
import { SharedContext } from "../contexts/SharedContext";

export default function App() {
  const mobile = useWindowMobile()

  const { t } = useTranslation();

  return (
    <div className="app-wrapper">
        <Header>{t('title')}</Header>
        <ErrorBoundary FallbackComponent={GenericErrorFallback}>
          <div className="main">
            <Main />
          </div>
        </ErrorBoundary>
        <Footer />
    </div>
  );
}
