"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/store/store";
import { init } from "@/store/features/shopify-theme/shopify-theme-slice";

export default function StoreProvider({
  children,
  shopifyThemeSettings,
}: {
  children: React.ReactNode;
  shopifyThemeSettings: unknown;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    storeRef.current.dispatch(init(shopifyThemeSettings));
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
}
