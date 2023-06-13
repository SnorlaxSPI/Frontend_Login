/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import { GlobalStyle } from "../../styles/global";
import './styles.css';

export const LayoutComponents = (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => {
  return (
    <div className="container">
      <GlobalStyle />
      <div className="container-login">
        <div className="wrap-login">{props.children}</div>
      </div>
    </div>
  );
};
