import decode from "jwt-decode";

const verifyToken = async (token) => {
  await token;
  if (!token) {
    return null;
  } else {
    const decoded = await decode(token);
    if (decoded.exp - (Date.now() / 1000).toFixed(0) < 0) {
      return null;
    } else {
      return token;
    }
  }
};

export default verifyToken;
