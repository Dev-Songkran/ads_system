import Cookies from "js-cookie";
import axios from "axios";

axios.defaults.baseURL = "https://ads_system.localhost/api";
axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded";

class Auth {
  constructor() {
    this.authenticated = false;
    if (!!Cookies.get("user")) {
      this.setAuthenticated();
    }
  }
  login(user) {
    const fetch = axios
      .post("/login/", user)
      .then(res => {
        Cookies.set("user", res.data.user, {
          expires: res.data.expires,
          path: "/"
        });
        return this.setAuthenticated();
      })
      .catch(err => {
        return Promise.reject(err);
      });
    return fetch;
  }

  logout(cb) {
    Cookies.remove("user");
    this.authenticated = false;
    cb();
  }
  setAuthenticated() {
    this.authenticated = true;
    return this.authenticated;
  }
  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
