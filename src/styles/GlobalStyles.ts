import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: var(--white);
}
:root {
  --primary: #21222c;
  --secondary: #282a36;
  --search: #202327;
  --white: #D9D9D9;
  --gray: #7A7A7A;
  --outline: #2F3336;
  --retweet: #00C06B;
  --like: #E8265E;
  --twitter: #33A1F2;
  --twitter-dark-hover: #011017;
  --twitter-light-hover: #2C8ED6;
  --background: #28262e;
  --PikTewOrange: #D46900;
  --PikTewBlue: #1466E1;
  --PikTewCurly: #202428;
  --orange: #E55838;
}
html, body, #root {
  min-height:  100vh;
}
*, button, input {
  border: 0;
  outline: 0;
  background: none;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
button {
  cursor: pointer;
  text-decoration: none;
}
li {
  list-style-type: none;
  padding: 8px;
}
`
