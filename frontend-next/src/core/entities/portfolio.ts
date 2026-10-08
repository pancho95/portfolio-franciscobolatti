export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  availability: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  summary: string;
}

export interface ExperienceItem {
  company: string;
  period: string;
  role: string;
  highlights: string[];
}

export interface ProjectItem {
  title: string;
  techStack: string[];
  github: string;
  description: string;
  demo: string;
}

export interface PortfolioData {
  profile: Profile;
  skills: string[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
}
