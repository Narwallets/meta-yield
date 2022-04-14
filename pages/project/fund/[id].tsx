import { useRouter } from "next/router";
import FundingSummary from "../../components/FundingSummary";
import { getSupporterDetailedList } from "../../../lib/near";
import { useEffect, useState } from "react";
import { SupportedKickstarter } from "../../types/project.types";
import { useStore } from "../../stores/wallet";
import { useGetSupportedProjects } from "../../hooks/projects";
import FundingSuccess from "../../components/FundingSuccess";
export default function Fund() {
  const router = useRouter();

  const { id } = router.query;
  const { wallet, setWallet } = useStore();
  const { isLoading, data } = useGetSupportedProjects(wallet?.getAccountId());
  if (isLoading || !id) return <></>;
  if (
    data.find(
      (s: SupportedKickstarter) => s.kickstarter_id === parseInt(id as string)
    )
  ) {
    const supportedProject = data.find(
      (s: SupportedKickstarter) => s.kickstarter_id === parseInt(id as string)
    );
    return (
      <FundingSuccess
        id={id}
        supporter_deposit={supportedProject.supporter_deposit}
      />
    );
  }

  return <FundingSummary id={id} />;
}
