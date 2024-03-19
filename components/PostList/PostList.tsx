'use client';

import React, { useEffect, useState } from 'react';
import FilterPosts from '../FilterPosts/FilterPosts';
import { PostType } from '@/lib/types';
import PostCard from '../PostCard/PostCard';
import getCategories from '@/lib/getCategories';
import { IoCloseOutline } from 'react-icons/io5';

interface CategoryType {
  category: string;
  renamedCategory: string;
}

const PostList = ({ posts }: { posts: PostType[] }) => {
  const categories: CategoryType[] = getCategories(posts);
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [activeCategory, setActiveCategory] = useState('');
  const [activeCategoryItems, setActiveCategoryItems] = useState<PostType[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  function onClickPosts(event: React.MouseEvent<HTMLElement>) {
    const target = event.target as Element;
    setActiveCategory(target.id);

    if (target.id === 'all') {
      setActiveCategoryItems(posts);
    } else {
      const filteredArr = posts.filter((post) => post.category?.includes(target.id));
      setActiveCategoryItems(filteredArr);
    }
  }

  function searchPosts(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.target.value);
  }

  function filterPostsBySearchQuery() {
    if (searchQuery !== '') {
      const filtered = activeCategoryItems.filter(
        (posts) =>
          posts.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          posts.excerpt.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setFilteredPosts(filtered);
    } else {
      searchQuery.toLowerCase() === '' && setFilteredPosts(activeCategoryItems);
    }
  }

  useEffect(() => {
    setActiveCategory('all');
    setActiveCategoryItems(posts);
  }, []);

  useEffect(() => {
    filterPostsBySearchQuery();
  }, [searchQuery, activeCategoryItems]);

  return (
    <>
      <form className="mb-4 max-w-[750px] mx-auto flex md:text-4xl text-xl items-center gap-1 relative">
          <input
            onChange={searchPosts}
            value={searchQuery}
            type="search"
            id="default-search"
            className="w-full py-[.4em] leading-none px-[1em] border border-darkPrimary/50 dark:border-whiteSecondary/30 rounded-full bg-whiteSecondary md:pr-[75px] pr-[45px] dark:text-whitePrimary dark:bg-darkSecondary"
            placeholder="Начните искать и вы найдете..."
            required
          />


          {searchQuery && <button onClick={() => setSearchQuery('')} type="button" className="border absolute md:right-5 bg-whiteSecondary dark:bg-darkSecondary border-darkPrimary/50 dark:border-whiteSecondary/30 rounded-full aspect-square right-[.35rem] h-[2.1rem] md:h-10">
            <IoCloseOutline size={`100%`} />
          </button>}
          
      </form>

      <FilterPosts
        posts={filteredPosts}
        categories={categories}
        activeCategory={activeCategory}
        onClickHandler={onClickPosts}
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {filteredPosts.length === 0 && <p>или не найдете...</p>}
        {filteredPosts.map((post, index) => post.published && <PostCard key={index} {...post} />)}
      </div>
    </>
  );
};

export default PostList;
