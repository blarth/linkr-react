
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


export default function Search({
    id,
    name,
    image,
    setSearchText
  }) {
    const navigate = useNavigate()

    function redirectToUser() {
        navigate(`/user/${id}`);
        setSearchText("")
      }
    return(
        <Container onClick={redirectToUser}>
            <img src={image} alt="user" />
            <p>{name}</p>
        </Container>
    );
}

const Container = styled.div`
    background-color: #E7E7E7;
    width: 100%;
    padding: 18px 18px 0 18px;
    :last-child{
        padding-bottom: 20px;
        border-end-end-radius: 8px;
        border-end-start-radius: 8px;
    }
    img{
        object-fit: cover;
        width: 39px;
        height: 39px;
        border-radius: 50%;
    }
    p{
        font-family: 'Lato';
        font-weight: 400;
        font-size: 19px;
        line-height: 23px;

        color: #515151;
        margin-left: 12px;
    }
`;