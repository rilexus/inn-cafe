import { createGlobalStyle } from "styled-components";
import { CssProvider } from "@nightfall-ui/css";

(() => {
  Array.prototype.groupBy = function (callback) {
    const groups = {};
    this.forEach((element, ...args) => {
      const groupName = callback(element, ...args);
      if (groupName in groups) {
        groups[groupName].push(element);
      } else {
        groups[groupName] = [element];
      }
    });

    return groups;
  };
})();

const GlobalStyle = createGlobalStyle`
  body, html {
    font-family: "Helvetica Neue", sans-serif;
    font-size: 16px;
    line-height: 1.6;
    padding: 0;
    margin: 0;
  };
  a {
    text-decoration: none;
  };
  * {
    box-sizing: border-box;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <CssProvider>
        <Component {...pageProps} />
      </CssProvider>
    </>
  );
}

export default MyApp;
