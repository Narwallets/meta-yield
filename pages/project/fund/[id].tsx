import { useRouter } from "next/router";
import FundingSummary from "../../components/FundingSummary";
export default function Fund() {
  const router = useRouter();
  const { id } = router.query;

  if(!id) return <></>
  return <FundingSummary id= {id} />
}
