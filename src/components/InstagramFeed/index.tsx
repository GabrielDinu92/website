import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface InstaPosts {
  id: string;
  imageUrl: string;
  caption: string;
}

const InstagramFeed: React.FC = () => {
  const [posts, setPosts] = useState<InstaPosts[]>([]);

  useEffect(() => {
    const fetchInstagramFeed = async () => {
      try {
        const response = await axios.get('/api/instagram-feed');
        const { posts } = response.data;
        setPosts(posts);
      } catch (error) {
        console.error('Error fetching Instagram feed:', error);
      }
    };

    fetchInstagramFeed();
  }, []);

  return (
    <>
      <h1>Instagram Feed</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <img src={post.imageUrl} alt="Instagram Post" />
          <p>{post.caption}</p>
        </div>
      ))}
    </>
  );
};

export default InstagramFeed;