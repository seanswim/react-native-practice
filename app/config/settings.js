import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "dev api url",
  },
  staging: {
    apiUrl: "staging api url",
  },
  prod: {
    apiUrl: "prod api url",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
