import React from 'react';
import { Container } from './Container';
import PostList from './Postlist/postList';
import posts from './data/post.json';
export const App = () => {
  return (
    <>
      <Container>
        {' '}
        <h2>Hello</h2>
      </Container>
      <PostList posts={posts}/>
    </>
  );
};
