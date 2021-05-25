import React from "react";
import { useIntl } from "gatsby-plugin-intl";

const Footer = () => {
  const intl = useIntl();
  return (
    <footer className="Footer">
      <span className="Footer__link">
        {intl.formatMessage({ id: "madeBy" })}{" "}
        <a href="https://github.com/GK-Hynes">Gerard Hynes</a>
      </span>
      <span className="Footer__link">
        {intl.formatMessage({ id: "logoBy" })}{" "}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>
      </span>
    </footer>
  );
};

export default Footer;
