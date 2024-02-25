'use client';

import React, { useEffect, useState } from 'react';
import FilterPosts from '../FilterPosts/FilterPosts';
import { NoteType } from '@/lib/types';
import getCategories from '@/lib/getCategories';
import Note from '../Note/Note';

interface CategoryType {
  category: string;
  renamedCategory: string;
}

const NotesList = ({ posts }: { posts: NoteType[] }) => {
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
  }, []);

  return (
    <>
      <FilterPosts
        posts={filteredPosts}
        categories={categories}
        activeCategory={activeCategory}
        onClickHandler={onClickPosts}
      />

      <div className="inline-flex flex-wrap gap-2">
        {filteredPosts.map((note, index) => note.published && <Note key={index} {...note} />)}
      </div>
    </>
  );
};

export default NotesList;
