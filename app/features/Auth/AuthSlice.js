// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   name: "",
//   token: "",
// };

// export const authSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     setUser: (state, { payload: { user } }) => {
//       state._id = user._id || "";
//       state.name = user.name || "";
//       state.companyName = user?.companyName || "";
//       state.email = user.email || "";
//       state.role = user.role || "";
//       state.status = user.status || "";
//       state.avatar = user.avatar || "";
//       state.cover = user?.cover || "";
//       state.createdAt = user.createdAt || "";
//       state.location = user?.location || {};
//       state.state = user.state || "";
//       state.country = user.country || "";
//       state.city = user.city || "";
//       state.zipCode = user.zipCode || "";
//       state.address = user.address || "";
//       state.phone = user.phone || "";
//       state.about = user.about || "";
//       state.isEmailVerified = user?.isEmailVerified || "";
//       state.isWhatsappVerified = user?.isWhatsappVerified || "";
//       state.agreement = user?.agreement || {};
//       state.seller_type = user?.seller_type || "";
//       state.docs = user?.docs || {};
//       state.delivery_method = user?.delivery_method || "";
//       state.defaultCurrency = user?.defaultCurrency || {};
//       state.payment = user?.payment || {};
//       state.isProfileComplete = user.isProfileComplete || false;

//       if (user.token) {
//         state.token = user.token;
//         Asy.setItem("token", user.token);
//       }
//     },
//     logout: (state) => {
//       state._id = "";
//       state.email = "";
//       state.companyName = "";
//       state.role = "";
//       state.status = "";
//       state.avatar = "";
//       state.cover = "";
//       state.token = "";
//       state.createdAt = "";
//       state.location = {};
//       state.state = "";
//       state.country = "";
//       state.city = "";
//       state.zipCode = 0;
//       state.address = "";
//       state.phone = "";
//       state.about = "";
//       state.isEmailVerified = "";
//       state.isWhatsappVerified = "";
//       state.agreement = {};
//       state.seller_type = "";
//       state.docs = {};
//       state.delivery_method = "";
//       state.defaultCurrency = {};
//       state.payment = {};
//       state.isProfileComplete = false;

//       localStorage.removeItem("token");
//     },
//   },
// });

// export const { setUser, logout } = authSlice.actions;

// export default authSlice.reducer;
