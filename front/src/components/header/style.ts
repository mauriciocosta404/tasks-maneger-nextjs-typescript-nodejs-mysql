import styled from 'styled-components';

export const Container=styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #fff;
    box-shadow: var(--box-shadow);
    max-height: 5rem;
    .logo{
        display: flex;
        gap: .5rem;
        align-items: center;
        font-size: 1.3rem;
        font-weight: 600;
    }
    .searchContainer{
        display: flex;
        align-items: center;
        border-radius: 5rem;
        gap: 1rem;
        border: 1px solid #ccc;
        padding: .3rem 1rem;
        input{
            border: none;
            padding: .3rem;
        }
    }
`;