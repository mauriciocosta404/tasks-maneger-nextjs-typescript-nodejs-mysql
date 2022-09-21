import styled from "styled-components";

export const Container=styled.div`
    background-color: #fff; 
    max-width: 64rem;
    margin: auto;
    padding: 1rem;
    img{
        border-radius: 50%;
    }
    .head{
        padding: 1rem;
        border-bottom: 1px solid #ccc;
        margin-bottom: 1rem;
    }
    .content{
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        flex-wrap: wrap;
        text-align: center;
        >div{     
            .inptus-container{
                margin-top: 2rem;
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                gap: 1rem;
                .input{
                    input{
                        width: 16rem;
                        padding: .6rem;
                        margin-left: 1rem;
                        border: 1px solid #ccc;
                    }
                }
            }
        }
    }
    .btn{
        display: flex;
        justify-content: center;
        button{
            color: #fff;
            background-color: #e41386;
            border: none;
            text-align: center;
            width: 10rem;
            padding: .5rem 3rem;
            font-size: 1.3rem;
    
        }
    }
`;