import styled from "styled-components"

const Container = styled.div`
height: 155px;
width: 503px;
border-radius: 11px;
color: #C4C4C4;
border: 1px solid #4D4D4D;
box-sizing: border-box;
font-family: Lato;
font-size: 11px;
font-weight: 400;
line-height: 13px;
text-align: left;
display:flex;
justify-content: center;
align-items: center;
margin-bottom: 20px;
cursor: pointer;

@media (max-width: 600px){
    height: 115px;
    width: 278px;    
}


    h1{
        height: 38px;
        width: 249px;
        margin-bottom: 5px;
        @media (max-width: 600px){
            height: 26px;
            width: 138.15px;
            overflow: hidden;
            margin-left: 11px;
        }
        
    }

    p{
        height: 39px;
        width: 302px;
        margin-bottom: 13px;
        @media (max-width: 600px){
            height: 44px;
            width: 175px;
             overflow: hidden;
             margin-left: 11px;
        }
    }

    h2{
        height: 13px;
        width: 263px;
        @media (max-width: 600px){
            height: 22px;
            width: 145.45px;
            overflow: hidden;
            margin-left: 11px;

        }

    }

    img{
        height: 150px;
        max-width: 153px;
        border-radius: 0px 12px 13px 0px;
        @media (max-width: 600px){
            height: 112px;
            width: 95px;

        }
    }

`;
const LeftContainer = styled.div`
width: 90%;
height:90%;
display: flex;
flex-direction: column;
justify-content:center;
align-items: flex-start;
padding-left: 19px;
padding-right: 27px;
`;

export {
    Container,
    LeftContainer
}