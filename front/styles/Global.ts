import { createGlobalStyle } from "styled-components";

export const GlobalStyle=createGlobalStyle`
    :root{
        --black:#192a56;
        --light-color:#666;
        --box-shadow:0 0.5rem 1.5rem rgba(0,0,0,0.1);
        --body-color:#efefef;
    }

    *{
        margin: 0; padding:0;
        box-sizing: border-box;
        text-decoration: none;
        transition: all .2s linear;
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
        
        html{
            font-size: 83%;
        }
        aside{
            max-width: 5rem;
            a{
                display: none;
            }
        }
        
    }
`;