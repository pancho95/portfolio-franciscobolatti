import { IPortfolioRepository } from '../core/ports/IPortfolioRepository';
import { PortfolioData } from '../core/entities/portfolio';

export class PortfolioService {
  constructor(private repository: IPortfolioRepository) {}

  async fetchPortfolio(lang: 'es' | 'en'): Promise<PortfolioData> {
    return this.repository.getPortfolio(lang);
  }
}