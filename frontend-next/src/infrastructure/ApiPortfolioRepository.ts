import { IPortfolioRepository } from '../core/ports/IPortfolioRepository';
import { PortfolioData } from '../core/entities/portfolio';

export class ApiPortfolioRepository implements IPortfolioRepository {
  private baseUrl: string;

  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
  }

  async getPortfolio(lang: 'es' | 'en'): Promise<PortfolioData> {
    const response = await fetch(`${this.baseUrl}/api/portfolio?lang=${lang}`);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return response.json();
  }
}