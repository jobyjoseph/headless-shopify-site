const axios = require("axios");

const shopifyStore = process?.env?.NEXT_PUBLIC_SHOPIFY_DOMAIN; // Your store domain
const accessToken = process?.env?.ADMIN_ACCESS_TOKEN; // Shopify Admin API access token

type ShopifyTheme = {
  role: string;
  id: string;
};

// Function to get the active theme
async function getActiveTheme() {
  try {
    const response = await axios.get(
      `https://${shopifyStore}/admin/api/2024-01/themes.json`,
      {
        headers: {
          "X-Shopify-Access-Token": accessToken,
        },
      }
    );

    // Find the active theme with role 'main'
    const themes = response.data.themes;
    const activeTheme = themes.find(
      (theme: ShopifyTheme) => theme.role === "main"
    );

    if (activeTheme) {
      return activeTheme.id;
    } else {
      throw new Error("No active theme found");
    }
  } catch (error) {
    console.log(error);
    console.error("Error getting active theme");
  }
}

// Function to get the theme settings
async function getThemeSettingsByThemeId(themeId: string) {
  try {
    const response = await axios.get(
      `https://${shopifyStore}/admin/api/2024-01/themes/${themeId}/assets.json`,
      {
        headers: {
          "X-Shopify-Access-Token": accessToken,
        },
        params: {
          "asset[key]": "config/settings_data.json",
        },
      }
    );

    const themeSettings = JSON.parse(response.data.asset.value);
    console.log(themeSettings);
    return themeSettings.current;
  } catch (error) {
    console.error("Error getting theme settings");
  }
}

// Main function to retrieve and log theme settings
export async function getThemeSettings() {
  try {
    const themeId = await getActiveTheme();
    if (themeId) {
      const settings = await getThemeSettingsByThemeId(themeId);
      console.log(settings.sections);
      return settings;
    }
  } catch (error) {
    console.error(error);
  }
}
