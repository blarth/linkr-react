import {
  THContainer,
  TrendingContainer,
  HashtagsContainer,
} from "../hashtagsSidebar/style.js";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

export default function Sidebar({loadHashTag, hashtags}) {
  

  useEffect(loadHashTag, []);
  



  if (hashtags === "") {
    return (
      <THContainer>
        <TrendingContainer>trending</TrendingContainer>
        <HashtagsContainer>loading...</HashtagsContainer>
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
