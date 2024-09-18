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
      `https://96ad7f4f49cbc858be3ae184f4759b23:f8dd7c8f7c9a48728a4f712acae319e9@${shopifyStore}/admin/api/2023-07/themes.json`,
      {
        params: {
          "asset[key]": "sections/announcement-bar.liquid",
        },
      }
    );

    const themeSettings = JSON.parse(response.data.asset.value);
    console.log(themeSettings);
    return themeSettings.current;
  } catch (error) {
    console.error("Error getting theme sections");
  }
}

// Main function to retrieve and log theme settings
export async function getSectionDetails() {
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
