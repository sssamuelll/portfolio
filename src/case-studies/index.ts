import { nymCaseStudy } from './nym';
import type { CaseStudy } from './schema';

const caseStudiesRegistry: Record<string, CaseStudy> = {
  nym: nymCaseStudy
};

export const getCaseStudyBySlug = (slug: string): CaseStudy | null => {
  return caseStudiesRegistry[slug] || null;
};

export const getAllCaseStudies = (): CaseStudy[] => {
  return Object.values(caseStudiesRegistry);
};