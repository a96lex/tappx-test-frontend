import React, { useEffect } from "react";
import { BundleManagement, Footer, Header } from "../../components";
import { AppLayout, MainCard } from "./Main.styled";
import { useBundleActions } from "../../context";

export function Main() {
  const { getBundles } = useBundleActions();

  useEffect(() => {
    getBundles();
  }, []);

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
