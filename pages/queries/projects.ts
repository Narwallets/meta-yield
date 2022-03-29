export const fetchProjects = async () => {
    const response = await fetch("/api/projects");
  return await response.json();
}