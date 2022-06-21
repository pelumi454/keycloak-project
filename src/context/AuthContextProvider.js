import Keycloak from "keycloak-js";
import axios from "axios";
export const kck = new Keycloak("/keycloak.json");
export const initKeycloak = (myApp) => {
  kck.init({
    onLoad: "check-sso",
    silentCheckSsoRedirectUri: "http://localhost:3000/silent-check-sso",
    pkceMethod: "S256",
  });
};
const myAxios = axios.create();
export const login = kck.login;
export const logout = kck.logout;
export const isLoggedIn = () => {
  return !!kck.token;
};
const updateToken = (successCallback) => { 
  kck.updateToken(5).then(successCallback)
}
export const configureApp = () => {
  myAxios.interceptors.request.use((config) => {
    if (isLoggedIn()) {
      const callback = () => {
        config.headers.Authorization = `Bearer ${kck.token}`;
        return Promise.resolve(config);
      };
      return updateToken(callback);
    }
  });
};
