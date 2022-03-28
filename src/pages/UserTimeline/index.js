
import Post from "../../components/PostComponent";
import api from "../../services/api";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import {Container} from "./style"
import Header from "../../components/Header";
import { useParams, useLocation } from "react-router-dom";
import { Avatar } from "../../components/PostComponent/style";
import { ContainerInfo } from "./style";

export default function UserTimeLine() {

    const { auth } = useAuth();
    const [data, setData] = useState(null)
    const [hashtags, setHashtags] = useState("");
    const { id } = useParams();
    const [user, setUser] = useState({})
    const location = useLocation()
    
    function loadHashTag() {
      const promise = api.getHashtags();
      promise
        .then((res) => setHashtags(res.data))
        .catch((error) => console.log(error));
    }
     function loadPost() {
    
      const promise = api.getPostbyUserId(auth, id);
      
      promise.then((response) => {
        
        setData([...response.data]);
        setUser({userName : response.data[0].userName, userImage : response.data[0].userImage})
        
      });
      promise.catch((error) => {
        console.log(error.response);
        alert("An error occured while trying to fetch the posts, please refresh the page")
      });
    }
    useEffect(() => {
        loadPost()
        // eslint-disable-next-line
    }, [location.pathname])
    


    
    return(
        <Container>
            <Header></Header>
            <ContainerInfo>
                <Avatar src={user?.userImage} alt="user Avatar"></Avatar>
                <h4>{`${user?.userName}'s posts`}</h4>
            </ContainerInfo> 
            {data === null ? <h3>Loading..</h3> : data?.length === 0 ? <h3>There are no posts yet</h3> : data?.map((post) => (
            <Post
            loadPost={loadPost}
            loadHashTag={loadHashTag}
            key={post.id}
            {...post}
        />
        ))}
        </Container>
    );
}

