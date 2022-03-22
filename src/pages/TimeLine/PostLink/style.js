import styled from "styled-components";

const Container = styled.div`
    background-color: #FFFFFF;

    width: 611px;
    height: 209px;

    display: flex;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
`;

const Img = styled.img`
    object-fit: cover;
    width: 50px;
    height: 50px;

    border-radius: 50%;
    margin: 18px;
`;

const Form = styled.form`
    width: 100%;
    margin-right: 22px;
    p{
        font-weight: 300;
        font-size: 20px;
        line-height: 24px;

        color: #707070;
        margin-top: 21px;
    }
    input{
        background: #EFEFEF;
        border-radius: 5px;
        border: none;

        padding-left: 10px;

        width: 100%;
    }
    .link{
        height: 30px;
        margin-top: 10px;
    }
    .description{
        height: 66px;
        margin-top: 5px;
    }
    div{
        display: flex;
        justify-content: end;
    }
    button{
        color: #FFFFFF;
        background: #1877F2;
        border-radius: 5px;

        border: none;

        width: 112px;
        height: 31px;
        margin-top: 5px;
    }
`;



export {
  Container,
  Form,
  Img
};