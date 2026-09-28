import { PortfolioData } from '../entities/portfolio';

export interface IPortfolioRepository {
  getPortfolio(lang: 'es' | 'en'): Promise<PortfolioData>;
}