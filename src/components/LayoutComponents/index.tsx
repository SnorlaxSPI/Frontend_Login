import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import { GlobalStyle } from "../../styles/global";
import { Container } from "./styles";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const LayoutComponents = (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => {
  return (
    <Container>
    <div className="container">
      <GlobalStyle />
      <div className="container-login">
        <div className="wrap-login">{props.children}</div>
      </div>
    </div>
  </Container>
  );
};
