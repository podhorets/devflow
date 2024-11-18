import React, { ReactNode } from "react";

import LeftSidebar from "@/components/ui/navigation/LeftSidebar";
import Navbar from "@/components/ui/navigation/navbar";
import RightSidebar from "@/components/ui/navigation/RightSidebar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />

      <div className="flex">
        <LeftSidebar />

        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>

        <RightSidebar />
      </div>
      {children}
    </main>
  );
};

export default RootLayout;
