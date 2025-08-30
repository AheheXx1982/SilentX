import { categoryMap } from '@constants/category';
import { getCollection, type CollectionEntry } from 'astro:content';

import type { BlogPost } from 'types/blog';

export async function getSortedPosts(): Promise<CollectionEntry<'blog'>[]> {
  const posts = await getCollection('blog');

  // 确保始终返回数组，即使没有文章
  if (!posts || !Array.isArray(posts)) {
    return [];
  }

  // 按日期排序
  const sortedPosts = posts.sort((a: BlogPost, b: BlogPost) => {
    return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
  });

  return sortedPosts;
}

export const getAllTags = (posts: BlogPost[]) => {
  return posts.reduce<Record<string, number>>((acc, post) => {
    const postTags = post.data.tags || [];
    postTags.forEach((tag: string) => {
      if (!acc[tag]) {
        acc[tag] = 0;
      }
      acc[tag]++;
    });
    return acc;
  }, {});
};

export const getPostCount = async () => {
  const posts = await getCollection('blog');
  return posts && Array.isArray(posts) ? posts.length : 0;
};

export type Category = {
  name: string;
  children?: Category[];
};

export async function getCategoryList(): Promise<{ categories: Category[]; countMap: { [key: string]: number } }> {
  const allBlogPosts = await getCollection('blog');

  // 确保始终有数组进行处理
  if (!allBlogPosts || !Array.isArray(allBlogPosts)) {
    return { categories: [], countMap: {} };
  }

  const countMap: { [key: string]: number } = {};
  const resCategories: Category[] = [];

  // 统计每个分类的直接文章数量
  for (let i = 0; i < allBlogPosts.length; ++i) {
    const post = allBlogPosts[i];
    const { catalog, categories } = post.data;
    if (!catalog || !categories?.length) {
      continue;
    }

    if (Array.isArray(categories[0]) && categories[0].length) {
      // categories[0] = ['笔记', '算法']
      for (let j = 0; j < categories[0].length; ++j) {
        const name = categories[0][j];
        countMap[name] = (countMap[name] || 0) + 1;
        if (j === 0) {
          addCategoryRecursively(resCategories, [], name);
        } else {
          const parentNames = categories[0].slice(0, j);
          addCategoryRecursively(resCategories, parentNames, name);
        }
      }
    } else {
      // categories[0] = '工具'
      const name = categories[0] as string;
      countMap[name] = (countMap[name] || 0) + 1;
      addCategoryRecursively(resCategories, [], name);
    }
  }
  // console.log('first countMap', JSON.stringify(countMap));

  // 根据 categoryMap 中的顺序对 resCategories 进行排序
  const orderedCategoryNames = Object.keys(categoryMap);
  resCategories.sort((a, b) => {
    const indexA = orderedCategoryNames.indexOf(a.name);
    const indexB = orderedCategoryNames.indexOf(b.name);
    if (indexA === -1) return 1; // a 不在映射中，排在后面
    if (indexB === -1) return -1; // b 不在映射中，排在前面
    return indexA - indexB;
  });

  return { categories: resCategories, countMap };
}

/**
 * 递归添加子分类 有副作用的函数 如 ['分类1', '分类2', '分类3'] 创建一级分类 '分类1'、二级分类 '分类2'、三级分类 '分类3'
 * @param rootCategories 根分类
 * @param parentNames 父分类名 ['分类1', '分类2']
 * @param name 子分类名 '分类3'
 * @returns
 */
export function addCategoryRecursively(rootCategories: Category[], parentNames: string[], name: string) {
  if (parentNames.length === 0) {
    const index = rootCategories.findIndex((c) => c.name === name); // 如果当前分类已存在，则直接返回
    if (index === -1) rootCategories.push({ name });
    return;
  } else {
    const rootParentName = parentNames[0];
    const index = rootCategories.findIndex((c) => c.name === rootParentName);
    if (index === -1) {
      // 如果父级分类不存在，则创建
      const rootParentCategory = { name: rootParentName, children: [] };
      rootCategories.push(rootParentCategory);
      addCategoryRecursively(rootParentCategory.children, parentNames.slice(1), name);
    } else {
      // 如果父级分类存在,找到这个分类
      const rootParentCategory = rootCategories[index];
      if (!rootParentCategory?.children) rootParentCategory.children = [];
      addCategoryRecursively(rootParentCategory.children, parentNames.slice(1), name);
    }
  }
}

// 统一 ['分类1', '分类2'] 和 '分类'
export function getCategoryArr(categories?: string[] | string) {
  if (!categories) return [];
  if (Array.isArray(categories) && categories.length) {
    return categories as string[];
  } else return [categories as string];
}

/**
 * 获取分类完整链接
 * @param categories 分类
 * @param parentLink 父分类链接
 * @returns 分类链接
 */
export function getCategoryLinks(categories?: Category[], parentLink?: string): string[] {
  if (!categories?.length) return [];
  // console.log('parentLink:', parentLink + ' categories:', categories.length);
  const res: string[] = [];
  categories.forEach((category: Category) => {
    const link = categoryMap[category.name];
    // 添加检查确保 link 不是 undefined
    if (!link) {
      console.warn(`警告: 分类 "${category.name}" 没有在 _config.yml 中定义映射`);
      return;
    }
    const fullLink = parentLink ? `${parentLink}/${link}` : link;
    res.push(fullLink);
    if (category?.children?.length) {
      const children = getCategoryLinks(category?.children, fullLink);
      res.push(...children);
    }
  });
  return res;
}

// categories/xxx/front-end
// return 前端
// get category name by link
export function getCategoryNameByLink(link: string): string {
  if (!link) return '';
  const arr = link.split('/');
  const last = arr[arr.length - 1];
  const res = Object.keys(categoryMap).find((key) => categoryMap[key] === last) ?? '';
  return res;
}

// 获取分类
export function getCategoryByLink(categories: Category[], link?: string): Category | null {
  // 添加检查确保 link 是字符串
  if (!link || typeof link !== 'string' || !categories?.length) return null;

  // 将链接分割为部分
  const linkParts = link.split('/').filter((part) => part.length > 0);
  if (linkParts.length === 0) return null;

  // 将链接部分转换为分类名称
  const categoryNames = linkParts.map((part) => {
    return Object.keys(categoryMap).find((key) => categoryMap[key] === part) || part;
  });

  if (categoryNames.length === 0) return null;

  // 递归查找分类
  function findCategory(cats: Category[], names: string[]): Category | null {
    if (names.length === 0) return null;

    const firstName = names[0];
    const category = cats.find((cat) => cat.name === firstName);

    if (!category) return null;

    // 如果这是最后一个名称，返回这个分类
    if (names.length === 1) return category;

    // 否则继续在子分类中查找
    if (category.children?.length) {
      return findCategory(category.children, names.slice(1));
    }

    return null;
  }

  return findCategory(categories, categoryNames);
}

/**
 * 获取分类下的所有文章
 * @param categoryName 分类名
 * @returns 文章列表
 */
export async function getPostsByCategory(categoryName: string): Promise<BlogPost[]> {
  const posts = await getSortedPosts();

  // 确保 posts 存在且为数组
  if (!posts || !Array.isArray(posts)) {
    return [];
  }

  return posts.filter((post) => {
    const { categories } = post.data;
    if (!categories?.length) return false;

    // 处理两种分类格式
    if (Array.isArray(categories[0])) {
      // ['笔记', '算法'] - 嵌套分类
      return categories[0].includes(categoryName);
    } else {
      // '工具' - 单级分类
      return categories[0] === categoryName;
    }
  });
}

/**
 * 获取嵌套分类下的所有文章
 * @param categoryPath 分类路径，例如 ['现金流乌托邦', '期权卖方策略']
 * @returns 文章列表
 */
export async function getPostsByCategoryPath(categoryPath: string[]): Promise<BlogPost[]> {
  const posts = await getSortedPosts();

  // 确保 posts 存在且为数组
  if (!posts || !Array.isArray(posts)) {
    return [];
  }

  return posts.filter((post) => {
    const { categories } = post.data;
    if (!categories?.length) return false;

    // 只处理嵌套分类格式
    if (Array.isArray(categories[0])) {
      // 检查分类路径是否匹配
      if (categories[0].length < categoryPath.length) return false;

      // 检查路径的每个部分是否匹配
      for (let i = 0; i < categoryPath.length; i++) {
        if (categories[0][i] !== categoryPath[i]) return false;
      }

      return true;
    }

    return false;
  });
}

export function getPostLastCategory(post: BlogPost): { link: string; name: string } {
  const { categories } = post.data;
  if (!categories?.length) return { link: '', name: '' };
  if (Array.isArray(categories[0])) {
    if (!categories[0]?.length) return { link: '', name: '' };
    const arr = categories[0];
    const link = '/categories/' + arr.map((c) => categoryMap[c]).join('/');
    return { link, name: arr[arr.length - 1] };
  } else {
    return { link: '/categories/' + categoryMap[categories[0] as string], name: categories[0] as string };
  }
}

// 获取分类的父分类（递归查找）
export function getParentCategory(category: Category | null, categories: Category[]): Category | null {
  if (!categories?.length || !category) return null;

  for (const c of categories) {
    if (!c.children?.length) continue;

    // 直接检查当前层级
    if (c.children.some((child) => child.name === category.name)) {
      return c;
    }

    // 递归检查子分类
    for (const child of c.children) {
      if (child.children?.length) {
        const result = getParentCategory(category, [child]);
        if (result) return result;
      }
    }
  }
  return null;
}

// 传入 getCategoryArr 返回的数组, 返回分类链接
export async function getCategoryLink(categories: string[]): Promise<string> {
  try {
    if (!categories || !Array.isArray(categories) || categories.length === 0) return '';

    const linkParts: string[] = [];
    for (const category of categories) {
      if (typeof category === 'string') {
        const mapped = categoryMap[category];
        if (mapped) {
          linkParts.push(mapped);
        } else {
          // 如果没有映射，则使用类别名称的小写形式并替换空格为连字符
          linkParts.push(category.toLowerCase().replace(/\s+/g, '-'));
        }
      }
    }

    const link = linkParts.join('/');
    // 确保链接不以斜杠结尾，符合 trailingSlash: 'never' 的配置
    return link.replace(/\/$/, '');
  } catch (error) {
    console.error('生成分类链接时出错:', error);
    return '';
  }
}
