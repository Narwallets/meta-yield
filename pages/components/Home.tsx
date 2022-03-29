import { Hero } from "./Hero";
import { ActiveProject } from "./ActiveProject";
import { Projects } from "./Projects";
import { useGetProjects } from "../hooks/projects";
export interface ProjectProps {
  id: string;
  name: string;
  motto: string;
  imageUrl: string;
  avatarUrl: string;
  description: string;
  verified: boolean;
  active: boolean;
  tags: string[];
  campaignText: string;
}

const Home = () => {
  const { data, isLoading } = useGetProjects();
  if (isLoading) return <>Loading...</>;
  return (
    <>
      <Hero />
      <ActiveProject
        projects={data.filter((project: ProjectProps) => project.active)}
      />
      <Projects projects={data} />
    </>
  );
};

export default Home;
