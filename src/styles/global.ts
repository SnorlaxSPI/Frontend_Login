import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, html {
  font-family: Nunito, sans-serif;
}

.login-form {
  width: 100%;
}

.login-form-title {
  font-family: Nunito, sans-serif;
  display: block;
  font-size: 30px;
  color: #007fff;
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
  font-family: Nunito, sans-serif;
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
  font-family: Nunito, sans-serif;
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
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
  background: #6a7dfe;
  background: -webkit-linear-gradient(to left, #21d4fd, #b721ff);
  background: -o-linear-gradient(to left, #21d4fd, #b721ff);
  background: -moz-linear-gradient(to left, #21d4fd, #b721ff);
  background: linear-gradient(to left, #21d4fd, #b721ff);
}

.focus-input::after {
  font-family: Nunito, sans-serif;
  font-size: 15px;
  color: #999999;
  line-height: 1.2;
  content: attr(data-placeholder);
  display: block;
  width: 100%;
  position: absolute;
  top: 16px;
  left: 0px;
  padding-left: 5px;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.input:focus {
  outline: 0;
}

.input:focus+.focus-input::after {
  top: -15px;
}

.input:focus+.focus-input::before {
  width: 100%;
}

.has-val+.focus-input::after {
  top: -15px;
}

.has-val+.focus-input::before {
  width: 100%;
}

.container-login-form-btn {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 13px;
}

.login-form-btn {
  font-size: 15px;
  border: none;
  border-radius: 10px;
  color: #fff;
  line-height: 1.2;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background: #6a7dfe;
  background: -webkit-linear-gradient(to left, #21d4fd, #b721ff);
  background: -o-linear-gradient(to left, #21d4fd, #b721ff);
  background: -moz-linear-gradient(to left, #21d4fd, #b721ff);
  background: linear-gradient(to left, #21d4fd, #b721ff);
}

.login-form-btn:hover {
  cursor: pointer;
}

.text-center {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.txt1 {
  font-size: 14px;
  color: #adadad;
  line-height: 1.5;
  padding-right: 5px;
}

.txt2 {
  font-size: 14px;
  color: #6a7dfe;
  line-height: 1.5;
  text-decoration: none;
}

  `