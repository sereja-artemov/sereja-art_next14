import {
  AiOutlineCalendar,
  AiOutlineFieldTime,
  AiOutlineRead,
} from 'react-icons/ai';
import TableOfContents from '@/components/TableOfContents/TableOfContents';
import MDXComponentsCustom from '@/components/MDXComponents';
import { getPost, getPosts } from '@/lib/getPosts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import getLocaleDate from '@/lib/getLocaleDate';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';
import { prettyCodeOptions } from '@/lib/prettyCodeOptions';
import rehypeAutolinkHeadings, {
  type Options as AutolinkOptions,
} from 'rehype-autolink-headings';
import { s } from 'hastscript';
import { notFound } from 'next/navigation';

interface IProps {
  params: { slug: string };
}

const PostLayout = async ({ params }: { params: { slug: string } }) => {
  const post = await getPost(params.slug, 'blog');
  if (!post) notFound();

  return (
    <div
      className={`grid grid-cols-1 lg:items-start ${
        post.tableOfContents.length > 0 && 'lg:grid-cols-[25%_1fr]'
      }`}
    >
      {post.tableOfContents.length > 0 && <TableOfContents post={post} />}
      <article
        className={`${
          post.tableOfContents.length <= 0 && 'mx-auto'
        } prose-code:not-prose w-full prose max-[375px]:prose-sm prose-custom prose-h2:blog-title-link prose-h3:blog-title-link prose-pre:not-prose lg:prose-xl dark:prose-invert prose-code:text-[15px] prose-pre:border prose-pre:border-blockBorderColorDark prose-pre:rounded-xl prose-pre:mt-0 prose-code:before:hidden prose-code:after:hidden prose-pre:rounded-t-none prose-pre:px-0`}
      >
        {/* шапка начало */}
        <div className="px-5 py-6 mb-5 border sm:px-6 lg:py-8 lg:px-10 rounded-3xl block-border block-bg">
          <h1 className="text-2xl leading-tight max-[375px]:text-xl font-bold font-boss lg:leading-tight lg:text-5xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap justify-between gap-1.5 text-sm dark:text-secondTextColorDark text-secondTextColor">
            <span className="inline-flex items-center gap-2 mr-3 lg:text-base [&>svg]:w-[1.4em] [&>svg]:h-auto">
              {<AiOutlineCalendar />}
              {getLocaleDate('ru', post?.date, 'short')}
            </span>
            <div className="inline-flex gap-4">
              <span className="flex items-center gap-2 lg:text-base [&>svg]:w-[1.4em] [&>svg]:h-auto">
                {<AiOutlineFieldTime />}
                {post.readingTime.readingTimeText}
              </span>
              <span className="flex items-center gap-2 lg:text-base [&>svg]:w-[1.4em] [&>svg]:h-auto">
                {<AiOutlineRead />}
                {post.readingTime.wordsQuantityStr}
              </span>
            </div>
          </div>
        </div>
        {/* шапка конец */}
        <MDXRemote
          source={post.body}
          options={{
            mdxOptions: {
              rehypePlugins: [
                rehypeSlug, // автоматически создает заголовкам id с таким же названием
                [
                  rehypeAutolinkHeadings,
                  {
                    behavior: 'append',
                    // на какие заголовки будет действовать
                    test: ['h2', 'h3'],
                    properties: { class: 'heading-link' },
                    content: s(
                      'svg',
                      {
                        xmlns: 'http://www.w3.org/2000/svg',
                        viewBox: '0 0 24 24',
                        width: '24',
                        height: '24',
                        fill: 'none',
                        stroke: 'currentColor',
                        'stroke-width': '2',
                        'stroke-linecap': 'round',
                        'stroke-linejoin': 'round',
                        'aria-label': 'Anchor link',
                      },
                      [
                        s('line', { x1: '4', y1: '9', x2: '20', y2: '9' }),
                        s('line', { x1: '4', y1: '15', x2: '20', y2: '15' }),
                        s('line', { x1: '10', y1: '3', x2: '8', y2: '21' }),
                        s('line', { x1: '16', y1: '3', x2: '14', y2: '21' }),
                      ]
                    ),
                  } satisfies Partial<AutolinkOptions>,
                ],
                [rehypePrettyCode, prettyCodeOptions],
              ],
            },
          }}
          components={MDXComponentsCustom}
        />
      </article>

    </div>
  );
};

export default PostLayout;

export const generateStaticParams = async () => {
  const posts = await getPosts('blog');
  return posts.map((post) => ({ slug: post.slug }));
};

