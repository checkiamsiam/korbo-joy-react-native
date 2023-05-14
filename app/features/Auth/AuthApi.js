import decode from "jwt-decode";
import { showMessage } from "react-native-flash-message";
import ApiBase from "../app/ApiBase";
import { setUser } from "./AuthSlice";

export const categoryAPI = ApiBase.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: `/api/ev1/userSingup`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
          showMessage({
            message: "Registering...",
            type: "info",
          });
          await queryFulfilled;
          showMessage({
            message: "Registered Successfully",
            type: "success",
          });
        } catch (err) {
          showMessage({
            message: "Registering Failed",
            type: "error",
          });
        }
      },
    }),
    login: builder.mutation({
      query: (data) => ({
        url: `/api/ev1/UserLogin`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch }) {
        try {
          showMessage({
            message: "Logging in..",
            type: "info",
          });
          const res = await queryFulfilled;
          const token = res.data;
          const decoded = decode(token);
          const userData = {
            name: decoded.name,
            number: decoded.number,
            token: token,
          };
          dispatch(setUser(userData));
          showMessage({
            message: "Logged in Successfully",
            type: "success",
          });
        } catch (err) {
          showMessage({
            message: "Login Failed.. Try Again",
            type: "error",
          });
        }
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = categoryAPI;
