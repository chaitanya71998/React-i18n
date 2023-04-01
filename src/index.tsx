import React from "react";
import ReactDOM from "react-dom";
import { withTranslation, WithTranslation } from "react-i18next";
import { setupTranslation } from "./i18n";

export interface IAppProps extends WithTranslation {}

export interface IAppState {
  language: string;
}

export class App extends React.Component<IAppProps, IAppState> {
  private setLanguage(language: string) {
    this.props.i18n.changeLanguage(language);
  }
  render() {
    const { t } = this.props;
    console.log(t("into:welcome"));
    return (
      <>
        <div>
          <h3>{t("intro:welcome")} React</h3>
          <button onClick={() => this.setLanguage("en")}>ENGLISH</button>
        </div>
      </>
    );
  }
}

setupTranslation().then(() => {
  const AppContainer = withTranslation("translation")(App);
  ReactDOM.render(
    <React.Suspense fallback={() => <h2>Loading</h2>}>
      <AppContainer />
    </React.Suspense>,
    document.getElementById("root")
  );
});
// append app to dom
