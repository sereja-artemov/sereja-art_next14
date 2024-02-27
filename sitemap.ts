import { MetadataRoute } from 'next';
import { getPosts } from './lib/getPosts';
import { navigationRoutes } from './data/navigationRoutes';
import { PostType } from './lib/types';

// async function getBlogsData() {
//   const blogs = await getPosts('blog');
//   const blogsSitemap: MetadataRoute.Sitemap = blogs.map((post: PostType) => ({
//     url: `${process.env.HOST}/blog/${post.slug}`,
//     lastModified: post.date,
//   }));

//   return blogsSitemap;
// }

// async function getNotesData() {
//   const notes = await getPosts('notes');
//   const notesSitemap: MetadataRoute.Sitemap = notes.map((post: PostType) => ({
//     url: `${process.env.HOST}/notes/${post.slug}`,
//     lastModified: post.date,
//   }));

//   return notesSitemap;
// }


// const navRoutes = navigationRoutes.map((element) => ({
//     url: `${process.env.HOST}/${element.route}`,
//     lastModified: new Date(),
// }));

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
const blogsData = await getPosts('blog');
const notesData = await getPosts('notes');

  const navRoutes = navigationRoutes.map((element) => ({
      url: `${process.env.HOST}/${element.route}`,
      lastModified: new Date(),
  }));

  const blogsSitemap: MetadataRoute.Sitemap = blogsData.map((post: PostType) => ({
    url: `${process.env.HOST}/blog/${post.slug}`,
    lastModified: post.date,
  }));

  const notesSitemap: MetadataRoute.Sitemap = notesData.map((post: PostType) => ({
    url: `${process.env.HOST}/notes/${post.slug}`,
    lastModified: post.date,
  }));

  return [
    {
      url: `${process.env.HOST}`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.HOST}/about`,
      lastModified: new Date(),
    },
    ...blogsSitemap,
    ...notesSitemap,
    ...navRoutes,
  ];
}