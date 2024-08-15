import { useState } from 'react';
import Article from '../components/Article';
import Search from '../components/Search';
import postsData from '../posts.json';

function Homepage() {
  const [posts, setPosts] = useState(postsData);

  const onSearchChange = (value) => {
    const filteredPosts = postsData.filter((item) =>
      item.title.includes(value)
    );
    setPosts(filteredPosts);
  };
  return (
    <>
      <h1>Simple Blog</h1>
      <Search onSearchChange={onSearchChange} />
      {posts.map((props, index) => (
        <Article {...props} key={index} />
      ))}
    </>
  );
}

export default Homepage;
