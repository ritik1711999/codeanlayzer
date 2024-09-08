import "@/asset/styles/globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

import React from "react";

function layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </head>
      <body className="bg-black">
        <NavBar />
        <div className="h-[600px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

export default layout;
