export const fetchProjects = async () => {
  const response = await fetch("/api/projects/");
  return await response.json();
};

export const fetchProjectDetails = async (id: number) => {
  const response = await fetch(`/api/projects/${id}`);
  return await response.json();
};

export const fetchActiveProjects = async () => {
  const response = await fetch("/api/projects/active");
  return await response.json();
};
