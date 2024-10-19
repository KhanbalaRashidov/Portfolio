import RSS from 'rss';

import env from '@/env.mjs';
import { getBlogPosts } from '@/lib/blog';

const feed = new RSS({
  title: 'Alexander Konietzko',
  description: 'Blog of Alexander Konietzko',
  site_url: env.NEXT_PUBLIC_WEBSITE_URL,
  feed_url: `${env.NEXT_PUBLIC_WEBSITE_URL}/feed.xml`,
});

getBlogPosts().map((post) => {
  feed.item({
    title: post.title,
    guid: `${env.NEXT_PUBLIC_WEBSITE_URL}/${post.language}/blog/${post.slug}`,
    url: `${env.NEXT_PUBLIC_WEBSITE_URL}/${post.language}/blog/${post.slug}`,
    date: post.publishedAt,
    description: post.summary,
    author: 'Alexander Konietzko',
    categories: post.tags,
  });
});

export function GET() {
  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'text/xml',
    },
  });
}
