import PostLink from "./PostLink";
import Post from "../../components/PostComponent";
import api from "../../services/api";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import {Container} from "./style"

export default function TimeLine() {
    const { auth } = useAuth();
    const [data, setData] = useState(null)
    
     function loadPost() {
    
      const promise = api.getPost(auth);
      
      promise.then((response) => {
        
        setData(response.data);
        
      });
      promise.catch((error) => {
        console.log(error.response);
        alert("An error occured while trying to fetch the posts, please refresh the page")
      });
    }
    useEffect(loadPost, [])
    

  
   
    
    return(
        <Container> 
            <h3>timeline</h3>
            <PostLink loadPost={loadPost}></PostLink>
            {data === null ? <h3>Loading..</h3> : data?.length === 0 ? <h3>There are no posts yet</h3> : data?.map((post) => (
            <Post
            key={post.id}
            {...post}
        />
        ))}
        </Container>
    );
}