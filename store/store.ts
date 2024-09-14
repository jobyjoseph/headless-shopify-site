import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import shopifyThemeReducer from "./features/shopify-theme/shopify-theme-slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      shopifyTheme: shopifyThemeReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];
