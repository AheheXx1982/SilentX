import type { CollectionEntry } from 'astro:content';

export type StockPost = CollectionEntry<'stock'>;

export interface StockSchema {
  title: string;
  description?: string; // 股票分析描述
  symbol: string; // 股票代码，如 AAPL, TSLA
  exchange?: string; // 交易所，如 NASDAQ, NYSE
  price?: number; // 当前价格
  change?: number; // 价格变化
  changePercent?: number; // 变化百分比
  date: Date;
  cover?: string;
  tags?: string[];
  categories?: string[] | string[][];
  analysis?: 'buy' | 'sell' | 'hold'; // 投资建议
  riskLevel?: 'low' | 'medium' | 'high'; // 风险等级
}
