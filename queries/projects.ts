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

export const fetchFinishedProjects = async () => {
  const response = await fetch("/api/projects/finished");
  return await response.json();
};

export const fetchSupportedProjects = async(supporterId: string) => {
  const response = await fetch(`/api/projects/supported/${supporterId}`);
  return await response.json();
}