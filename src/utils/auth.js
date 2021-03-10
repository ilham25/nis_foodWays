import imgProfile from "../assets/img/profile.png";

const LOCAL_KEY = "ways-food-user";

export const register = (data) => {
  !localStorage.getItem(LOCAL_KEY) &&
    localStorage.setItem(LOCAL_KEY, JSON.stringify([]));

  const localData = JSON.parse(localStorage.getItem(LOCAL_KEY));
  const { id, email, password, fullname, gender, phone, userrole } = data;
  const userData = {
    id,
    email,
    password,
    fullname,
    gender,
    phone,
    userrole,
    photo: imgProfile,
  };
  const tempData = [...localData, userData];
  localStorage.setItem(LOCAL_KEY, JSON.stringify(tempData));
};

export const login = (data) => {
  const userData = JSON.parse(localStorage.getItem(LOCAL_KEY));
  const checkUserEmail = userData.find((user) => user.email == data.email);
  if (checkUserEmail) {
    const checkUserPassword = userData.find(
      (user) => user.password == data.password
    );
    if (checkUserPassword) {
      localStorage.setItem(
        `${LOCAL_KEY}-login`,
        JSON.stringify(checkUserPassword)
      );
      return checkUserPassword;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export const logout = () => {
  localStorage.removeItem(`${LOCAL_KEY}-login`);
};

export const isLogin = () => {
  return localStorage.getItem(`${LOCAL_KEY}-login`) ? true : false;
};
