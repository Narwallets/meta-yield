import { useRouter } from "next/router";
import FundingSuccess from "../../components/FundingSuccess";

export default function Fund() {
  const router = useRouter();
  const { id } = router.query;


  return <FundingSuccess id={Number(id)} />;
}
