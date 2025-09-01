import { Project, CATEGORIES } from '@/app/data/projects';

export type CategoryFilter = typeof CATEGORIES[number];

export function filterProjects(projects: Project[], activeFilters: CategoryFilter[]): Project[] {
  if (activeFilters.length === 0) {
    return projects;
  }
  
  return projects.filter(project => 
    activeFilters.some(filter => project.categories.includes(filter))
  );
}

export function getUniqueCategories(projects: Project[]): CategoryFilter[] {
  const categories = new Set<CategoryFilter>();
  projects.forEach(project => {
    project.categories.forEach(category => categories.add(category));
  });
  return Array.from(categories).sort();
}
