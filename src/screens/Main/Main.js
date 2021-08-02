import React from "react";
import { BundleManagement, Footer, Header } from "../../components";
import { AppLayout, MainCard } from "./Main.styled";

export function Main() {
  return (
    <>
      <Header />
      <AppLayout>
        <MainCard>
          <BundleManagement />
        </MainCard>
      </AppLayout>
      <Footer />
    </>
  );
}
