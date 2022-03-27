import {
  THContainer,
  TrendingContainer,
  HashtagsContainer,
} from "../hashtagsSidebar/style.js";

import { useState, useEffect } from "react";
import api from "../../services/api.js";
import { Link } from "react-router-dom";

import { ThreeDots } from "react-loader-spinner";

export default function Sidebar() {
  const [hashtags, setHashtags] = useState("");

  useEffect(() => {
    const promise = api.getHashtags();
    promise
      .then((res) => setHashtags(res.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(hashtags);

  if (hashtags === "") {
    return (
      <THContainer>
        <TrendingContainer>trending</TrendingContainer>
        <HashtagsContainer>
          {" "}
          <ThreeDots color="#FFFFFF" height={13} width={100} />
        </HashtagsContainer>
      </THContainer>
    );
  }

  return (
    <THContainer>
      <TrendingContainer>trending</TrendingContainer>
      <HashtagsContainer>
        {hashtags.map((item) => (
          <Link to={`/hashtag/${item.name.slice(1)}`}>{item.name}</Link>
        ))}
      </HashtagsContainer>
    </THContainer>
  );
}
