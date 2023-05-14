import SignIn from "../Screens/Auth/SignIn";

const protectedScreen = (Screen, login) => {
  if (!login) {
    return SignIn;
  }
  return Screen;
};

export default protectedScreen;
