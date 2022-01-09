import React from 'react';

const Posts = ({ posts, search }) => {
  return (
    <>
      {posts
        .filter((post) => {
          if (search == '') {
            return post;
          } else if (post.title.toLowerCase().includes(search.toLowerCase())) {
            return post;
          }
        })
        .map((post) => (
          <div>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        ))}
    </>
  );
};

export default Posts;
