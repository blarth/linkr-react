import React from 'react'
import { Container, LeftContainer} from './style'

export default function MetaDataPost({url, title, description, image}) {
  function handleNewWindow(){
    
    window.open(url, "_blank")
  }
  
  return (
    <Container onClick={handleNewWindow}>
        <LeftContainer>
            <h1>{title}</h1>
            <p>{description}</p>
            <h2>{url}</h2>
        </LeftContainer>
        <img src={image} alt="img post"></img>
    </Container>
  )
}
