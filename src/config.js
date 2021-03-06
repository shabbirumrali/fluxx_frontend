const DEV = "http://localhost:8000/v1";
const QA = "http://localhost:8000/v1";
const LOCAL = "http://localhost:8000/v1";

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
