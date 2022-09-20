import styled from "styled-components";

export const Container=styled.div`
    padding: 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(8rem,1fr));
    gap: 2rem;
    >div:not(:last-child){
        background-color:#fff ;
        .icon{
            font-size: 2rem;
            color:#e41386;
        }
    }
    >div:last-child{
        background-color:#e41386 ;
        color: #fff;
    }
    .icon{
        font-size: 2rem; 
        color:#fff;
    }
`;

export const MiniCard = styled.div`
    padding: 2rem ;
    display: flex;
    justify-content: center;
    align-items: center;
    gap:3rem;
    h2{
        font-size: 1.9rem;
    }
`;