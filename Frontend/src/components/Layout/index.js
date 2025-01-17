import React from "react";

import Header from "../Header";

// Global styles and component-specific styles.
import "./global.css";
import { main } from "./main.module.css";

const Layout = ({ children }) => (
  <div>
    <Header />
    <main className={main}>{children}</main>
  </div>
);

export default Layout;
