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
`;

export {
    Container
}