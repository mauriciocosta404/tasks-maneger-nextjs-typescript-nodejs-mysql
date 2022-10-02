import styled from "styled-components";

export const AppContainer = styled.div`
    background-color: #fff;
    position: absolute;
    top: 50%;left:50%;
    transform: translate(-50%,-50%);
    >div{
        display: flex;
        flex-direction: column;
        padding: 1.5rem;
        input,textarea{
            border: 1px solid #ccc;
        }
    }
    *{
        margin: .4rem;
        padding:.5rem 1rem;
    }
    button{
        background-color: #e41386;
        border: none;
        color: #fff;
        text-align: center;
    }
`;