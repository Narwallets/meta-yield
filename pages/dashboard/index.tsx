import { useRouter } from "next/router";
import Dashboard from "../components/Dashboard";

export default function DashboardContainer() {
  const router = useRouter();

  return <Dashboard/>;
}
