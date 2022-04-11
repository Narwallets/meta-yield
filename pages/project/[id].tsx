import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ProjectDetails from "../components/ProjectDetails";
import { useGetProjectDetails } from "../hooks/projects";
export default function ProjectDetailsContainer() {
  const router = useRouter();
  const { id } = router.query;
  const {isLoading, data} = useGetProjectDetails(parseInt(id as string))
  
  if (isLoading) return <>Loading</>
  return <ProjectDetails data={data} />;
}
