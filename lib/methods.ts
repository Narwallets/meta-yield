// katherine gasless methods (view methods)
export const katherineViewMethods = {
  getTotalKickstarters: "get_total_kickstarters",
  getKickstarterIdFromSlug: "get_kickstarter_id_from_slug",
  getKickstarter: "get_kickstarter",
  getKickstarters: "get_kickstarters",

  getKickstarterTotalGoals: "get_kickstarter_total_goals",
  getKickstarterGoal: "get_kickstarter_goal",
  getActiveProjects: "get_active_projects",
  getProjectDetails: "get_project_details",
  getSupporterTotalDepositInKickstarter:
    "get_supporter_total_deposit_in_kickstarter",
  getSupporterTotalRewards: "get_supporter_total_rewards",
  getSupporterAvailableRewards: "get_supporter_available_rewards",
  getSupportedDetailedList: "get_supported_detailed_list",
  getSupporterEstimatedStNear: "get_supporter_estimated_stnear",
  getSupportedProjects: "get_supported_projects",
};

// katherine gas methods (change methods)
export const katherineChangeMethods = {
  withdraw: "withdraw",
  withdrawAll: "withdraw_all",
  claim: "claim_all_kickstarter_tokens"
};

export const metaPoolMethods = {
  getStNearPrice: "get_st_near_price",
  getAccountInfo: "get_account_info",
  ftTransferCall: "ft_transfer_call",
};

export const projectTokenViewMethods = {
  storageBalanceOf: "storage_balance_of",
  metadata: "ft_metadata",
  storageBalanceBounds: "storage_balance_bounds"
}

export const projectTokenChangeMethods = {
  storageDeposit: "storage_deposit"
}

// metavote gasless methods (view methods)
export const metavoteViewMethods = {
  getAllLockingPositions: "get_all_locking_positions",
  getLockingPosition: "get_locking_position",
  getBalance: "get_balance",
  getLockedBalance: "get_locked_balance",
  getUnlockingBalance: "get_unlocking_balance",
  getAvailableVotingPower: "get_available_voting_power",
  getUsedVotingPower: "get_used_voting_power",
  getTotalVotes: "get_total_votes",
  getVotesByContract: "get_votes_by_contract",
  getVotesByVoter: "get_votes_by_voter",
  getVotesForObject :"get_votes_for_object"

};

// metavote gas methods (change methods)
export const metavoteChangeMethods = {
  unlockPosition: "unlock_position",
  unlockPartialPosition: "unlock_partial_position",
  relockPartialPosition: "relock_partial_position",
  relockFromBalance: "relock_from_balance",
  clear_locking_position: "clear_locking_position",
  withdraw: "withdraw",
  withdrawAll: "withdraw_all",
  vote: "vote",
  rebalance: "rebalance",
  unvote: "unvote",
  newLocking: "new",
  relock: "relock_position"
};
