import NavBar from "@/components/NavBar";
import { ThemeProvider } from "next-themes";

import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (

    <div dir="rtl" className=' font-cairo min-h-screen'>
    <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
  >

<NavBar />
      {children}
      </ThemeProvider>
</div>


  );
};

export default Layout;
