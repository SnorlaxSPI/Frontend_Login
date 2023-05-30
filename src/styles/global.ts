import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .container {
    width: 100%;
    margin: 0 auto;
  }

  .container-login {
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    padding: 15px;

    background-color: #111;
  }

  .wrap-login {
    width: 100%;
    background-color: #333;
    border-radius: 10px;

    overflow: hidden;
    padding: 0 5px 10px 0px rgba(0, 0, 0, 0.2);
  }

  .login-form {
    width: 100%;
  }

  .login-form-title {
    display: block;
    font-size: 30px;
    color: azure;

    line-height: 1.2;
    text-align: center;
  }

  .login-form-title img {
    width: 90px;
  }

  .wrap-input {
    width: 100%;
    position: relative;
    border-bottom: 2px solid #adadad;
    margin-bottom: 37px;
  }

  .input {
    font-size: 15px;
    color: #fff;
    line-height: 1.2;
    border: none;
    display: block;

    width: 100%;
    height: 45px;

    background-color: transparent;

    padding: 0 5px;
  }

  .focus-input {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;

    top: 0;
    left: 0;

    pointer-events: none;
    color: #adadad;
  }

  .focus-input::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;

    -webkit-transition: all 0.4s;
    -o-transition: all a.4s;
    -moz-transition: all a.4s;
    background-color: -webkit-linear-gradient(to left #21d4fd, #b721ff);
    background-color: -o-linear-gradient(to left #21d4fd, #b721ff);
    background-color: -moz-linear-gradient(to left #21d4fd, #b721ff);
    background-color: linear-gradient(to left #21d4fd, #b721ff);
  }

  .focus-input::after {
    
  }

  `