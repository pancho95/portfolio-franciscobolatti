'use client';

import React, { useState, useEffect } from 'react';
import { ApiPortfolioRepository } from '@/infrastructure/ApiPortfolioRepository';
import { PortfolioService } from '@/services/PortfolioService';
import { PortfolioData } from '@/core/entities/portfolio';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { ExperienceCard } from '@/components/ExperienceCard';
import { ProjectCard } from '@/components/ProjectCard';

const repository = new ApiPortfolioRepository();
const portfolioService = new PortfolioService(repository);

export default function Home() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    portfolioService
      .fetchPortfolio(lang)
      .then((res) => {
        if (isMounted) {
          setData(res);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error(err);
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [lang]);

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 font-sans p-6 md:p-12 max-w-5xl mx-auto">
      <header className="flex justify-between items-center mb-12 border-b border-neutral-800 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-white">{data.profile.name}</h1>
          <p className="text-indigo-400 font-medium">{data.profile.title}</p>
        </div>
        <LanguageSwitcher currentLang={lang} onLanguageChange={setLang} />
      </header>

      <section className="mb-12">
        <p className="text-neutral-300 text-lg leading-relaxed mb-6">{data.profile.summary}</p>
        <div className="flex flex-wrap gap-4 text-sm text-neutral-400">
          <span>📍 {data.profile.location}</span>
          <span>✉️ {data.profile.email}</span>
          <a href={data.profile.linkedin} target="_blank" rel="noreferrer" className="text-indigo-400 hover:underline">
            LinkedIn
          </a>
          <a href={data.profile.github} target="_blank" rel="noreferrer" className="text-indigo-400 hover:underline">
            GitHub
          </a>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold border-b border-neutral-800 pb-2 mb-6">
          {lang === 'es' ? 'Habilidades Técnicas' : 'Technical Skills'}
        </h2>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill, i) => (
            <span key={i} className="bg-neutral-900 border border-neutral-800 text-neutral-200 px-3 py-1 rounded-lg text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold border-b border-neutral-800 pb-2 mb-6">
          {lang === 'es' ? 'Experiencia Profesional' : 'Professional Experience'}
        </h2>
        <div className="space-y-6">
          {data.experience.map((item, idx) => (
            <ExperienceCard key={idx} item={item} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold border-b border-neutral-800 pb-2 mb-6">
          {lang === 'es' ? 'Proyectos' : 'Projects'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.projects.map((proj, idx) => (
            <ProjectCard key={idx} project={proj} />
          ))}
        </div>
      </section>
    </main>
  );
}