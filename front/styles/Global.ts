import { createGlobalStyle } from "styled-components";

export const GlobalStyle=createGlobalStyle`
    :root{
        --green:#27ae60;
        --black:#192a56;
        --light-color:#666;
        --box-shadow:0 0.5rem 1.5rem rgba(0,0,0,0.1);
        --body-color:#efefef;
        --nav-green:#16b621;
        --bg-color:#ffffff;
        --nav-color:#474747;
        --search-color:#000000;
        --button-send-color:#222222;

    }

    *{
        margin: 0; padding:0;
        box-sizing: border-box;
        text-decoration: none;
        transition: all .5s linear;
        outline: none;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    body{
        background-color: var(--body-color);
    }
    html{ 
        font-size: 93.5%;
        overflow-x: hidden;
        scroll-padding-top: 5.5rem;
        scroll-behavior: smooth;
    }
    button{
        cursor: pointer;
    }
    
    
    @media screen and (max-width:800px){
        .rightSide{
            display: none;
        }
        
        
    }
`;