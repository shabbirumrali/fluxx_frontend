const DEV = "https://fluxxcharter.com/v1";
const QA = "https://fluxxcharter.com/v1";
const LOCAL = "https://fluxxcharter.com/v1";

export default {
  config: () => {
    switch (process.env.REACT_APP_STAGE) {
      case "dev":
        return {
          baseUrl: DEV,
        };
      case "qa":
        return {
          baseUrl: QA,
        };
      default:
        return {
          baseUrl: LOCAL,
        };
    }
  },
  defaultRoute: "/",
};
