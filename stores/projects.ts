import create from "zustand";

interface ProjectsState {
  projectsToVote: Array<any>;
  setProjects: (value: any) => void;
}

export const useStoreProjects = create<ProjectsState>((set) => ({
  projectsToVote: [],
  setProjects: (value: any) => set((state: any) => ({ ...state , projectsToVote: value })),
}));
