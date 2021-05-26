import React from "react";
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl";

const languageName = {
  en: "English",
  ga: "Gaeilge",
};

const Language = () => {
  return (
    <div className="Language">
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <button
              key={language}
              className={`Language__button ${
                currentLocale === language ? "current" : ""
              }`}
              onClick={() => changeLocale(language)}
            >
              {languageName[language]}
            </button>
          ))
        }
      </IntlContextConsumer>
    </div>
  );
};

export default Language;
