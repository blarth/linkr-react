import {
  THContainer,
  TrendingContainer,
  HashtagsContainer,
} from "../hashtagsSidebar/style.js";

import { useEffect } from "react";

import { Link } from "react-router-dom";

import { ThreeDots } from "react-loader-spinner";

export default function Sidebar({ loadHashTag, hashtags }) {
  useEffect(loadHashTag, []);

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
        {hashtags?.map((item) => (
          <Link to={`/hashtag/${item.name.slice(1)}`}>{item.name}</Link>
        ))}
      </HashtagsContainer>
    </THContainer>
  );
}
