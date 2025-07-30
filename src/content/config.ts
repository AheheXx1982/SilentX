import type { BlogSchema } from 'types/blog';
import type { StockSchema } from 'types/stock';
import type { CryptoSchema } from 'types/crypto';
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    link: z.string().optional(),
    date: z.date(),
    cover: z.string().optional(),
    tags: z.array(z.string()).optional(),
    // 兼容老 Hexo 博客
    subtitle: z.string().optional(),
    catalog: z.boolean().optional(),
    categories: z
      .array(z.string())
      .or(z.array(z.array(z.string())))
      .optional(),
  }) satisfies z.ZodType<BlogSchema>,
});

const stockCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    symbol: z.string(),
    exchange: z.string().optional(),
    price: z.number().optional(),
    change: z.number().optional(),
    changePercent: z.number().optional(),
    date: z.date(),
    cover: z.string().optional(),
    tags: z.array(z.string()).optional(),
    categories: z
      .array(z.string())
      .or(z.array(z.array(z.string())))
      .optional(),
    analysis: z.enum(['buy', 'sell', 'hold']).optional(),
    riskLevel: z.enum(['low', 'medium', 'high']).optional(),
  }) satisfies z.ZodType<StockSchema>,
});

const cryptoCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    symbol: z.string(),
    network: z.string().optional(),
    price: z.number().optional(),
    change: z.number().optional(),
    changePercent: z.number().optional(),
    marketCap: z.number().optional(),
    date: z.date(),
    cover: z.string().optional(),
    tags: z.array(z.string()).optional(),
    categories: z
      .array(z.string())
      .or(z.array(z.array(z.string())))
      .optional(),
    analysis: z.enum(['buy', 'sell', 'hold']).optional(),
    riskLevel: z.enum(['low', 'medium', 'high']).optional(),
    volume24h: z.number().optional(),
  }) satisfies z.ZodType<CryptoSchema>,
});

export const collections = {
  blog: blogCollection,
  stock: stockCollection,
  crypto: cryptoCollection,
};
