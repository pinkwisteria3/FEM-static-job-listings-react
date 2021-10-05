import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@500;700&display=swap');
    *,
    *::before,
    *::after{
        box-sizing:border-box;
    }
    body{
        margin:0;
        padding:0;
        background:hsl(180, 52%, 96%);
        font-family: 'Spartan', sans-serif;
    }
`
export default GlobalStyle;