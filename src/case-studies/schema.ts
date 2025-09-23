export interface CaseStudy {
  slug: string;
  hero: {
    title: string;
    subtitle?: string;
    timeframe?: string;
    role?: string;
    stack: string[];
    coverImage?: string;
  };
  summary: string;
  problem: string;
  audienceAndConstraints: {
    audience: string;
    constraints: string[];
  };
  architecture: {
    overview: string;
    keyDecisions: { 
      decision: string; 
      rationale: string; 
      tradeoffs?: string; 
    }[];
    diagramNote?: string;
  };
  implementation: {
    highlights: { 
      title: string; 
      detail: string; 
    }[];
    codeSnippets?: { 
      label: string; 
      language: 'ts' | 'tsx' | 'css' | 'bash' | 'json'; 
      code: string; 
    }[];
  };
  results: {
    metrics?: { 
      label: string; 
      value: string; 
    }[];
    outcomes?: string[];
  };
  demo: {
    liveUrl?: string;
    repoUrl?: string;
  };
  lessons: string[];
  nextSteps?: string[];
  i18n?: {
    es?: Partial<CaseStudy>;
    de?: Partial<CaseStudy>;
    ja?: Partial<CaseStudy>;
  };
}