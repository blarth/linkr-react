import styled from "styled-components"

const Container = styled.div`
height: 276px;
width: 611px;
border-radius: 16px;
background : #171717;
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 600px){
    width:100%;
    height: 232px;
    border-radius: 0;
}
`;

const Avatar = styled.img`
height: 50px;
width: 50px;
border-radius: 26.5px;
margin-bottom: 172px;
margin-right: 18px;
@media (max-width: 600px){
    width:40px;
    height: 40px;
    margin-bottom: 150px;
}
`;

const ContainerPost = styled.div`
width: 80%;
height: 90%;
display: flex;
flex-direction: column;
justify-content: center;
`;

const User = styled.div`
height: 23px;
width: 502px;
font-family: Lato;
font-size: 19px;
font-weight: 400;
line-height: 23px;
text-align: left;
color: #FFFFFF;
margin-bottom: 7px;
margin-top: 19px;
@media (max-width: 600px){
    width:80%;
    height: 23px;
    margin-top: 10px;
} 
`;

const Description = styled.div`
min-height: 52px;
width: 502px;
font-family: Lato;
font-size: 17px;
font-weight: 400;
line-height: 20px;
text-align: left;
color: #B7B7B7;

@media (max-width: 600px){
    min-height: 52px;
    width: 288px;
    
}
`;



export {
    Container,
    Avatar,
    ContainerPost,
    User,
    Description,
}