import { Container, Form, Img } from "./style";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import api from "../../../services/api";

export default function PostLink() {
    const [isLoading, setIsLoading] = useState(false);
    const [link, setLink] = useState("");
    const [description, setDescription] = useState("");
    const { auth } = useAuth();

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        try{
            api.sendPost({link, description } , auth.token);
            setIsLoading(false);
            alert("deu bom");
        }
        catch{
            setIsLoading(false);
            alert("erro");
        }
    }
    
    return (
        <Container>
            <div>
                <Img src="https://cdn-icons-png.flaticon.com/512/17/17004.png" alt="user" />
            </div>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <p>What are you going to share today?</p>
                <input
                    className="link"
                    type="text"
                    placeholder="http://..."
                    name="link"
                    onChange={(e) => setLink(e.target.value)}
                    value={link}
                    required
                />
                <input
                    className="description"
                    type="text"
                    placeholder="Awesome article about #javascript"
                    name="description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />
                <div>
                    <button type="submit" disabled={isLoading}>
                        {
                            isLoading
                                ? "publishing..."
                                : "publish"
                        }
                    </button>
                </div>
            </Form>
        </Container>
    );
}