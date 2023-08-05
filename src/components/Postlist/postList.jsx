import React from 'react';
import PropTypes from 'prop-types';
import { PostItem } from '../PostItem/PostIem.jsx';
function PostList({posts}) {
  console.log(posts);
  return (
    <>
      <h2>List of Posts</h2>
      <ul>
        {posts.map(({id, title, text}) => (
       <PostItem key={id} title={title} text={text}/>
        ))
}
      </ul>
    </>
  );
}
export default PostList;
PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};