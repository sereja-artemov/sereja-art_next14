import PostList from '@/components/PostList/PostList';
import { getPosts } from '@/lib/getPosts';
import { notFound } from 'next/navigation';

export default async function Blog() {
  const posts = await getPosts('blog');
  if (!posts) return notFound()

  return (
    <>
      <h1 className="block-title">Блог</h1>
       <PostList posts={posts} />
    </>
  );
}
