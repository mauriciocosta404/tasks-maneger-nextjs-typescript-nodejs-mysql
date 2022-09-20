import styled from "styled-components";

export const Container=styled.div`
    padding: 4rem 6rem;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(8rem,1fr));
    gap: 2rem;
`;

export const MiniCard = styled.div`
    padding: 2rem ;
    background-color:#fff ;
    display: flex;
    justify-content: center;
    align-items: center;
    gap:6rem;
    h2{
        font-size: 3rem;
    }
    .icon{
        font-size: 2.6rem;
        color:#e41386;
    }
`;