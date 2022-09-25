export const doLogin = (data, next) => {
  console.log("data found " + data);
  localStorage.setItem("loginData", JSON.stringify(data));
  next();
};

export const isLoggedIn = () => {
  return localStorage.getItem("loginData") != null ? true : false;
};

export const doLogout = (next) => {
  localStorage.removeItem("loginData");
  next();
};

export const getCurrentUser = () => {
  return isLoggedIn() ? JSON.parse(localStorage.getItem("loginData")).user : undefined;
};
