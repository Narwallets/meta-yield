import { useRouter } from "next/router";
import ProjectDetails from "../components/ProjectDetails";

export default function ProjectDetailsContainer() {
  const router = useRouter();
  const { id } = router.query;


  return <ProjectDetails id={Number(id)} />;
}
