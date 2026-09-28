import React from 'react';
import { ExperienceItem } from '@/core/entities/portfolio';

export const ExperienceCard: React.FC<{ item: ExperienceItem }> = ({ item }) => {
  return (
    <div className="bg-neutral-900/60 p-6 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-all">
      <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
        <h3 className="text-xl font-bold text-white">{item.role}</h3>
        <span className="text-xs bg-indigo-950 text-indigo-300 px-3 py-1 rounded-full border border-indigo-800/50">
          {item.period}
        </span>
      </div>
      <p className="text-indigo-400 text-sm font-medium mb-4">{item.company}</p>
      <ul className="list-disc list-inside space-y-2 text-neutral-300 text-sm">
        {item.highlights.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
    </div>
  );
};