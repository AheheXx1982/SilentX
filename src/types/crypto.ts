import type { CollectionEntry } from 'astro:content';

export type CryptoPost = CollectionEntry<'crypto'>;

export interface CryptoSchema {
  title: string;
  description?: string; // 加密货币分析描述
  symbol: string; // 加密货币代码，如 BTC, ETH
  network?: string; // 网络，如 Bitcoin, Ethereum
  price?: number; // 当前价格
  change?: number; // 价格变化
  changePercent?: number; // 变化百分比
  marketCap?: number; // 市值
  date: Date;
  cover?: string;
  tags?: string[];
  categories?: string[] | string[][];
  analysis?: 'buy' | 'sell' | 'hold'; // 投资建议
  riskLevel?: 'low' | 'medium' | 'high'; // 风险等级
  volume24h?: number; // 24小时交易量
}
