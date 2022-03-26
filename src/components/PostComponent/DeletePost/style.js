import styled from "styled-components"

const ButtonDelete = styled.button`
    all: unset;
    background-color: #1877F2;

    width: 134px;
    height: 37px;
    border-radius: 5px;
    @media (max-width: 600px){
        width: 110px;
        font-size: 15px;
    }

    text-align: center;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
`;

const ButtonNotDelete = styled.button`
    all: unset;
    background-color: #FFFFFF;

    width: 134px;
    height: 37px;
    border-radius: 5px;
    @media (max-width: 600px){
        width: 110px;
        font-size: 15px;
    }

    text-align: center;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #1877F2;
`;

const ButtonDeletePost = styled.button`
    all: unset;
    display: flex;
    justify-content: end;
    img{
        padding-top: 20px;
    }
`;

const Form = styled.form`
    display: flex;
    justify-content: space-around;
    margin-top: 40px;
    padding-bottom: 15px;
    @media (max-width: 600px){
        margin-top: 20px;
    }
`;

const TextModal = styled.p`
    font-weight: 700;
    font-size: 34px;
    line-height: 41px;
    text-align: center;
    min-width: 280px;
    padding: 15px 70px 0 70px; 

    color: #FFFFFF;

    @media (max-width: 600px){
        padding: 15px 35px 0 35px; 
        font-size: 20px;
        line-height: 28px;
    }
`;


export {
    ButtonDelete,
    ButtonNotDelete,
    Form,
    TextModal,
    ButtonDeletePost,
}