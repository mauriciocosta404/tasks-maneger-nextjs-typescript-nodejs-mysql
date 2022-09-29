import styled from "styled-components";

export const Container=styled.div`
    background-color: #fff; 
    max-width: 64rem;
    margin: auto;
    padding: 1rem;
    .head{
        padding: 1rem;
        border-bottom: 1px solid #ccc;
        margin-bottom: 1rem;
        display: flex;
        justify-content: space-between;
        button{
            padding: .6rem 2rem;
            color: #fff;
            background-color: #e41386;
            border: none;
        }
    }
    table{
        width: 100%;
        tr{
            border-collapse: collapse;
        }
        td,tr{
            padding: 1rem ;
            text-align: center;
        }
        td:last-child{
            cursor: pointer;
        }
        
    }
    
`;