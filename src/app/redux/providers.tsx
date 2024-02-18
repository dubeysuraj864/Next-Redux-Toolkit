"use client";
import { store } from "./store";
const { Provider } = require("react-redux");
export function Providers({ children }: any) {
  return <Provider store={store}>{children}</Provider>;
}
