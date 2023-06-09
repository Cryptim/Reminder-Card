import React from "react";
import moment from "moment";
const Article = ({ title, snippet, date, length }) => {
  console.log(date);
  return (
    <article className="post">
      <h2>{title}</h2>
      <div className="post-info">
        <span>{moment(date).format("MMMM MM Do dddd,YYYY")}</span>
        <span>{length} min Read</span>
      </div>
      <p>{snippet}</p>
    </article>
  );
};

export default Article;
