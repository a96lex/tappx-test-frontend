import React from "react";
import { StyledFooter } from "./Footer.styled";

export function Footer() {
  return (
    <StyledFooter>
      <div>
        <div>Integration guides</div>
        <div>Contact</div>
        <div>Press</div>
        <div>Hire me</div>
      </div>
      <div style={{ justifyContent: "center" }}>
        <span>Developed with ❤️ by&nbsp;</span>
        <a
          href="https://github.com/a96lex"
          rel="noreferrer"
          target="_blank"
          style={{ color: "white" }}
        >
          @a96lex
        </a>
      </div>
    </StyledFooter>
  );
}
