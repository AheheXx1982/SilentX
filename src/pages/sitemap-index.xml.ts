import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { siteConfig } from '@constants/site-config';

// 转义 XML 特殊字符
function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '&':
        return '&amp;';
      case "'":
        return '&apos;';
      case '"':
        return '&quot;';
      default:
        return c;
    }
  });
}

export async function GET(context: APIContext) {
  const { site } = context;

  if (!site) {
    throw new Error('Missing site metadata');
  }

  // 获取所有博客文章
  const posts = await getCollection('blog');

  // 确保 posts 存在且为数组
  const validPosts = posts && Array.isArray(posts) ? posts : [];

  // 获取所有静态页面
  const staticPages = ['', 'about', 'rss.xml'];

  // 生成文章URL列表
  const postUrls = validPosts.map((post) => {
    const postUrl = `${site}article/${post.data.link ?? post.slug.split('/').pop() ?? post.slug}/`;
    const lastMod = post.data.date.toISOString().split('T')[0];
    return {
      loc: postUrl,
      lastmod: lastMod,
      changefreq: 'weekly',
      priority: 0.8,
    };
  });

  // 生成静态页面URL列表
  const pageUrls = staticPages.map((page) => {
    const pageUrl = page ? `${site}${page}/` : `${site}`;
    return {
      loc: pageUrl,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'daily',
      priority: page === '' ? 1.0 : 0.5,
    };
  });

  // 合并所有URL
  const allUrls = [...pageUrls, ...postUrls];

  // 生成sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (url) => `  <url>
    <loc>${escapeXml(url.loc)}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
