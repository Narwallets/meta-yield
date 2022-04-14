import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ProjectDetails from "../components/ProjectDetails";

export default function ProjectDetailsContainer() {
  const router = useRouter();
  const id = router.query && router.query.id ? router.query.id : '';
  
  if(!id) return <></>
  return <ProjectDetails id= {id} />
}
