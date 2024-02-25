'use client';

import React, { useEffect, useState } from 'react';
import FilterPosts from '../FilterPosts/FilterPosts';
import { PostType } from '@/lib/types';
import PostCard from '../PostCard/PostCard';
import getCategories from '@/lib/getCategories';

interface CategoryType {
  category: string;
  renamedCategory: string;
}

const PostList = ({ posts }: { posts: PostType[] }) => {
  const categories: CategoryType[] = getCategories(posts);
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [activeCategory, setActiveCategory] = useState('');

  function onClickPosts(event: React.MouseEvent<HTMLElement>) {
    const target = event.target as Element;
    setActiveCategory(target.id);

    if (target.id === 'all') {
      const filteredArr = posts;
      setFilteredPosts(filteredArr);
    } else {
      const filteredArr = posts.filter((post) => post.category?.includes(target.id));
      setFilteredPosts(filteredArr);
    }
  }

  useEffect(() => {
    setActiveCategory('all');
  }, [])

  return (
    <>
      <FilterPosts posts={filteredPosts} categories={categories} activeCategory={activeCategory} onClickHandler={onClickPosts} />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {filteredPosts.map((post, index) => post.published && <PostCard key={index} {...post} />)}
      </div>
    </>
  );
};

export default PostList;
