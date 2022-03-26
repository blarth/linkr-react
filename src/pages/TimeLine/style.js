import styled from "styled-components"

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
gap: 16px;
overflow: scroll;


    h3{
        height: 64px; 
        font-family: Oswald;
        font-size: 43px;
        font-style: normal;
        font-weight: 700;
        line-height: 64px;
        text-align: center;
        color: #FFFFFF;
    }

    h4{
        height: 64px;
        width: 145px;
        font-family: Oswald;
        font-size: 43px;
        font-style: normal;
        font-weight: 700;
        line-height: 64px;
        text-align: left;
        color: #FFFFFF;
        margin-top: 150px;
        margin-bottom: 43px;
        
        align-self: flex-start;
        @media (max-width: 600px){
            
            margin-top: 100px
            
        }
    }
`;
const ContainerInfo = styled.div`
width: 600px;
height: 300px;
display: flex;
align-items: center;
justify-content: flex-start;

   
    @media (max-width: 600px){
            width: 100%;
            height: 200px; 
            margin-bottom: 15px;
            font-size: 33px;
         
        &> h4  {
        text-overflow: ellipsis;
    }
    
            
        }  
`;

export {
    Container,
    ContainerInfo
}