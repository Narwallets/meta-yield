export const fetchProjects = async () => {
  const response = await fetch("/api/projects/");
  return await response.json();
};

export const fetchProjectDetails = async (id: number, votingMode?: boolean) => {
  if (votingMode) {
    const response = await fetch(`/api/projects/vote/${id}`);
    return await response.json();
  } else {
    const response = await fetch(`/api/projects/${id}`);
    return await response.json();
  }
};

export const fetchVotedProjects = async () => {
  const response = await fetch("/api/projects/vote");
  return await response.json();
};

export const fetchWinnerProject = async () => {
  const response = await fetch("/api/projects/votes/winner");
  return await response.json();
};

export const fetchProjectsVotes = async () => {
  const response = await fetch("/api/projects/votes");
  return await response.json();
};

export const fetchActiveProjects = async () => {
  const response = await fetch("/api/projects/active");
  return await response.json();
};

export const fetchComingSoonProjects = async () => {
  const response = await fetch("/api/projects/comingsoon");
  return await response.json();
};

export const fetchFinishedProjects = async () => {
  const response = await fetch("/api/projects/finished");
  return await response.json();
};

export const fetchSupportedProjects = async (supporterId: string) => {
  const response = await fetch(`/api/projects/supported/${supporterId}`);
  return await response.json();
};
