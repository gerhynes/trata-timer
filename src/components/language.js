import React from "react";
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl";

const languageName = {
  en: "English",
  ga: "Gaeilge",
};

const Language = () => {
  return (
    <div>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <a
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                color: currentLocale === language ? `#fff` : `var(--red-700)`,
                backgroundColor:
                  currentLocale === language
                    ? `var(--red-700)`
                    : `var(--red-100)`,
                fontWeight: 600,
                margin: `1rem 0.5rem`,
                padding: `0.25rem 0.5rem`,
                borderRadius: `1rem`,
                textDecoration: `none`,
                cursor: `pointer`,
              }}
            >
              {languageName[language]}
            </a>
          ))
        }
      </IntlContextConsumer>
    </div>
  );
};

export default Language;
