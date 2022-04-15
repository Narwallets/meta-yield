export interface TeamMemberProps {
    id: number;
    name: string;
    bio: string;
    avatarUrl: string;
    handle: string;
  }
  export interface KickstarterGoalProps {
    cliff_timestamp: number;
    desired_amount: string;
    end_timestamp: number;
    id: number;
    name: string;
    tokens_to_release: string;
    unfreeze_timestamp: number;
  }
  export interface KickstarterProps {
    close_timestamp: number;
    goals: KickstarterGoalProps[];
    id: number;
    open_timestamp: number;
    token_contract_address: string;
    total_deposited: string;
    total_supporters: number;
    project_token_symbol: string;
    stnear_price_at_freeze: string;
    stnear_price_at_unfreeze: string;
    active: boolean;
    successful: boolean;
    winner_goal_id: number;
  }
  export interface ProjectProps {
    id: number;
    slug:string;
    name: string;
    motto: string;
    imageUrl: string;
    avatarUrl: string;
    description: string;
    verified: boolean;
    active: boolean;
    tags: string[];
    campaignHtml: string;
    team: TeamMemberProps[];
    kickstarter?: KickstarterProps;
  }