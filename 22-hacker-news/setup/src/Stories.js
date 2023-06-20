import React from "react";

import { useGlobalContext } from "./context";

const Stories = () => {
  const { isLoading, hits, removeStory } = useGlobalContext();
  // console.log(isLoading);
  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="stories">
      {hits.map((story) => {
        const { objectID, title, num_comments, url, points, author } = story;
        console.log(story);
        return (
          <article className="story">
            <h4 className="title">{title}</h4>
            <p className="info">
              {points} by <span>{author} |</span>
              {num_comments} comments
            </p>
            <div>
              <a
                href={url}
                className="read-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                readmore
              </a>
              <button
                className="remove-btn"
                onClick={() => {
                  removeStory(objectID);
                }}
              >
                remove
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
