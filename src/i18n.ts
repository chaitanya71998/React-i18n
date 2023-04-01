import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

export const setupTranslation = async () => {
  console.log("Loading translations");
  const i18nInstance = i18n
    .use(initReactI18next)
    .use(Backend) // passes i18n down to react-i18next
    .init(
      {
        fallbackLng: "en",
        fallbackNS: "intro",
        backend: {
          loadPath: "/locales/{{lng}}/{{ns}}.json"
        }
      },
      (err) => {
        console.error(err);
      }
    );
  i18n.loadNamespaces(["intro"], (err) => {
    console.log(err);
  });
  return i18nInstance;
};
