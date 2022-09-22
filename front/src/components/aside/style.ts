import styled from "styled-components";

export const Container=styled.aside`
    position: sticky;
    bottom: 0;
    top: 0;
    padding: 1rem 0rem 1rem 1rem;
    background-color:#e41386;
    height: 100vh;
    width: 20rem;
    color: #fff;
    .logoP{
        padding: 1rem;
        display: flex;
        gap:1.5rem;
        align-items: center;
        h2{
            font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        }
        h3{
            font-size: 1.7rem;
        }
    }
    .menu{
        margin-top: 3rem;
    }
    .menu >div{
        padding: .9rem;
        border-radius: 5rem 0rem 0rem 5rem;
        display: flex;
        gap: 1rem;
        font-size: 1.2rem;
        margin: .6rem 0;
        cursor: pointer;

        a{
            color: #fff;
        }
    }
    .menu >div:hover{
        background-color: #fff;
        color: #e41386;
        a{
            color: #e41386;
        }
    }
    .menu div:first-child{
        background-color: #fff;
        color: #e41386;
        a{
            color: #e41386;
        }
    }
`;