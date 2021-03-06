import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin:0;
  padding:0;
  outline:0;
  box-sizing:bober-box;
}

html,body,#root{
  min-height:100%;
}

body{
  -webkit-font-smoothing: antialiased !important;
  background:#7159c1
}

body, input, button{
  color:#222;
  font-size:14px;
  font-family:Arial, Helvetica, sans-serif;
}

button{
  cursor:pointer;
}
`;
