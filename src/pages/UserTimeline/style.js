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
        text-align: left;
        color: #FFFFFF;
        margin-top: 150px;
        
        align-self: flex-start;
        @media (max-width: 600px){
            
            
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
    img  {
            margin-top: 80px;
            padding-left: 5px;
            margin-right: 10px;
    
    }
    @media (max-width: 600px){
            height: 200px; 
            width: 100%;
            margin-bottom: 15px;
            font-size: 33px;
            &> img  {
            margin-top: 150px;
            padding-left: 5px;
            margin-right: 10px;
           
    }
    
            
        }  
`;

export {
    Container,
    ContainerInfo
}