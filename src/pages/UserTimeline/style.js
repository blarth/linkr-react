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
        width: 145px;
        font-family: Oswald;
        font-size: 43px;
        font-style: normal;
        font-weight: 700;
        line-height: 64px;
        text-align: left;
        color: #FFFFFF;
    }

    h4{
        height: 140px;
        width: 500px;
        font-family: Oswald;
        font-size: 45px;
        font-style: normal;
        font-weight: 700;
        line-height: 64px;
        text-align: left;
        color: #FFFFFF;
        margin-top: 150px;
        margin-bottom: 43px;
        align-self: flex-start;
        @media (max-width: 600px){
            
            margin-top: 100px;
            font-size: 33px;
            
        }
    }
`;

const ContainerInfo = styled.div`
width: 100%;
height: 300px;
display: flex;
align-items: center;
justify-content: center;

    &> img  {
        margin-top: 250px;
    }
   
    @media (max-width: 600px){
            height: 200px; 
            margin-bottom: 15px;
            font-size: 33px;
            &> img  {
            margin-top: 230px;
            padding-left: 5px;
            &> h4  {
            text-overflow: ellipsis;
    }
    }
    
            
        }  
`;

export {
    Container,
    ContainerInfo
}