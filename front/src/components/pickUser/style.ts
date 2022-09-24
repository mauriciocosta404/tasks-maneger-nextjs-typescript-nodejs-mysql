import styled from "styled-components";

export const Container=styled.div`
    position: absolute;
    left: 0;right: 0;bottom:0;top:0;
    //background-color:  rgba(255, 255, 255, 0.856);
    z-index: 10;
`;
export const UsersContainer = styled.div`
    position: relative;
    background-color:#fff;
    top: 60%;
    left:60% ;
    transform:translate(-50%,-50%) ;
    max-width:40rem;
    max-height: 30rem;
    overflow-y: scroll;
    z-index: 100;
    >div{
        display: flex;
        padding: .3rem;
        gap: 1.7rem;
        cursor: pointer;
    }
    >div:hover{
        background-color: #ddd;
    }
    .initial{
        width:3rem;
        height: 3rem;
        background-color: #ccc;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content:center;
    }
`;
