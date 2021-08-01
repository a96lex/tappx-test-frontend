import React from "react";
import { Header } from "../../components";
import { AppLayout } from "./Main.styled";

export function Main() {
  return (
    <AppLayout>
      <Header />
      <div>Bundle manager</div>
    </AppLayout>
  );
}
