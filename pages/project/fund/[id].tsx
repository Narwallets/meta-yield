import { useRouter } from "next/router";
import FundingSummary from "../../components/FundingSummary";

export default function Fund() {
  const router = useRouter();
  const { id } = router.query;


  return <FundingSummary id={Number(id)} />;
}
