import { useRouter } from "next/router";
import FundingSummary from "../../components/FundingSummary";
import { useGetProjectDetails } from "../../hooks/projects";
export default function Fund() {
  const router = useRouter();
  const { id } = router.query;
  const {isLoading, data} = useGetProjectDetails(parseInt(id as string))
  
  if (isLoading) return <>Loading</>

  return <FundingSummary data={data} />;
}
