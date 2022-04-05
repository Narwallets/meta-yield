import { Hero } from "./components/Hero";
import { ActiveProject } from "./components/ActiveProject";
import { Projects } from "./components/Projects";
import { useGetProjects } from "./hooks/projects";
import { HowItWorks } from "./components/HowItWorks";
export interface TeamMemberProps {
  id: number;
  name: string;
  bio: string;
  avatarUrl: string;
  handle: string;
}
export interface ProjectProps {
  id: number;
  name: string;
  motto: string;
  imageUrl: string;
  avatarUrl: string;
  description: string;
  verified: boolean;
  active: boolean;
  tags: string[];
  campaignHtml: string;
  team: TeamMemberProps[];
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
      <HowItWorks />
    </>
  );
};

export default Home;
