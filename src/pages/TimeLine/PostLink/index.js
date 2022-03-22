import { Container, Form, Img } from "./style";
import { useState } from "react";

export default function PostLink() {
    const [isLoading, setIsLoading] = useState(false);
    function handleSubmit(e) {
        e.preventDefaut();

        setIsLoading(true);
        
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
                    required
                />
                <input
                    className="description"
                    type="text"
                    placeholder="http://..."
                    name="description"
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