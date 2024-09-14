import { createSlice } from "@reduxjs/toolkit";

interface ShopifyThemeState {
  settings: {
    sections: {
      "universal-banner": {
        settings: {
          banner_block_enable: boolean;
          bg_color: string;
          bg_image: string;
        };
        blocks: {
          [key: string]: {
            settings: {
              banner_enable: boolean;
              logged_in_status: string;
              text: string;
              text_color: string;
              countdown_enable: boolean;
              date: string;
              international_shipping_message_override: boolean;
            };
          };
        };
      };
      "main-nav": {
        settings: {
          top_link_special: string;
          top_link_special_2: string;
          top_link_special_3: string;
          ["sub-item_title"]: string;
          ["sub-item_title_2"]: string;
          ["sub-item_title_3"]: string;
        };
        blocks: {
          [key: string]: {
            type: string;
            settings: {
              which_menu: string;
              block_enable: boolean;
              sub_sub_title: string;
              sub_sub_link: string;
              sub_sub_img: string;
              sub_sub_alt: string;
            };
          };
        };
      };
    };
    enable_loyalty: boolean;
  };
}

const initialState: ShopifyThemeState = {};

export const shopifyThemeSlice = createSlice({
  name: "shopifyTheme",
  initialState,
  reducers: {
    init: (state, action) => {
      state.settings = action.payload;
    },
  },
});

export const { init } = shopifyThemeSlice.actions;

export default shopifyThemeSlice.reducer;
