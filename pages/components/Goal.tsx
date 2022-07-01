import {
  Box,
  BoxProps,
  Divider,
  Flex,
  HStack,
  Progress,
  Stack,
  Tag,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import * as React from "react";
import { useEffect, useState } from "react";
import { formatToLocaleNear, yton } from "../../lib/util";
import { KickstarterGoalProps } from "../../types/project.types";
import GoalCircle from "./GoalCircle";
import ProgressGoal from "./ProgressGoal";
import { ProjectStatus } from "./ProjectDetails";

interface GoalProps extends BoxProps {
  kickstarterGoal: KickstarterGoalProps;
  isCompleted: boolean;
  isActive: boolean;
  isLastGoal: boolean;
  isFirstGoal: boolean;
  totalDeposited: number;
  projectStatus: ProjectStatus;
}

const Goal = (props: GoalProps) => {
  const {
    isActive,
    isCompleted,
    isLastGoal,
    isFirstGoal,
    kickstarterGoal,
    totalDeposited,
    projectStatus,
    ...stackProps
  } = props as GoalProps;

  const isMobile = useBreakpointValue({ base: true, md: false });
  const orientation = useBreakpointValue<"horizontal" | "vertical">({
    base: "vertical",
    md: "vertical",
  });
  const COMPLETE_COLOR = {
    colorScheme: 'green',
    variant: '400'
  };
  const ACTIVE_COLOR ={
    colorScheme: 'indigo',
    variant: '500'
  }; 
  const INACTIVE_COLOR ={
    colorScheme: 'gray',
    variant: '200'
  }; 
  const TIMEOUT_COLOR ={
    colorScheme: 'orange',
    variant: '600'
  }; 

  const [color, setcolor] = useState(INACTIVE_COLOR);
  const [progress, setProgress] = useState(0);

  const isTimeout = ()=> {
    return isActive && ((projectStatus as ProjectStatus) === ProjectStatus.SUCCESS || (projectStatus as ProjectStatus) === ProjectStatus.UNSUCCESS);
  }

  const isInactive = ()=> {
    return !isActive && !isCompleted;
  }

  useEffect(() => {
    setcolor(getColor(true));
    setProgress(getProgressPercentage());
  }, [])
  
  const getColor= (considerTimeout?: boolean)=>{

    if (isCompleted) {
      return COMPLETE_COLOR;
    }

    if(considerTimeout && isActive && isTimeout()) {
        return TIMEOUT_COLOR;
    }
   
    if (isActive) {
      return ACTIVE_COLOR;
    } 
      return INACTIVE_COLOR;
    
  }

  const getProgressPercentage = ()=> {

    if (isCompleted) {
      return 100;
    }
    if (!isActive) {
      return 0;
    } else {
      const goalDesiredAmount = parseInt(kickstarterGoal.desired_amount);
      const deposited = totalDeposited;
      const raised = kickstarterGoal.id === 0 ? deposited : deposited > goalDesiredAmount ? deposited : (goalDesiredAmount - (goalDesiredAmount - deposited));
      return goalDesiredAmount ? ((raised * 100) / goalDesiredAmount): 0;
    }
  }

  const getTag =()=> {
    if (isCompleted ) {
      return (<Tag size={'sm'} h={'20px'} backgroundColor={color.colorScheme +'.200'} color={color.colorScheme +'.500'} > {'Completed'}</Tag>)
    } else {
      if (isTimeout()) {
        if (isActive ) {
          return (<Tag size={'sm'} h={'20px'} backgroundColor={'orange.600'} color={'white'} > {'Timeout'}</Tag>)
        }
      }else {
        if (isActive ) {
          return (<Tag size={'sm'} h={'20px'} backgroundColor={color.colorScheme +'.200'} color={color.colorScheme +'.500'} > {'In progress...'}</Tag>)
        }
      }
    }
  }

  if (!props) return <></>;
  return (
    <>
      <Stack
        spacing="4"
        direction={{ base: "row", md: "row" }}
        flex="1"
        {...stackProps}>
        <Stack
          spacing="0"
          align="center"
          direction={{ base: "column", md: "column" }}
        >
          { !isLastGoal && (
            <Divider
            position={'absolute'}
            zIndex={'1'}
            display={isMobile ? "none" : "initial"}
            orientation={orientation}
            borderWidth="1px"
            h={20}
            backgroundColor={ "gray.200"}
          />)
          }
          <GoalCircle
            backgroundCircleColor={color}
            isActive={isActive}
            isTimeout={isTimeout()}
            isCompleted={isCompleted}
            goalNumber={kickstarterGoal?.id + 1}
          />
        </Stack>
        <Flex
          justifyContent={'space-between'}
          w={'100%'}
          flexWrap={'wrap'}
          alignItems={'center'}
        >
          <HStack>
            <Text fontSize={'xs'} color={isInactive() ?  'indigo.300': color.colorScheme+'.500' } fontWeight={700} mr={'8px'}>
              {kickstarterGoal?.name.replaceAll('_',' ')} 
            </Text>
            <Text fontSize={'xs'} color={isInactive() ? 'gray.300' : 'gray.800'} fontWeight={700}>
              {kickstarterGoal
                ? `${formatToLocaleNear(yton(kickstarterGoal?.desired_amount))} stNEAR `
                : "N/D"}
            </Text>
          </HStack>
          <HStack>
            { getTag() }
            <Text fontSize={'xs'} color={isInactive() ? 'gray.300' : 'gray.800'} fontWeight={700}> { progress.toFixed(2)  + '%' }</Text>
          </HStack>
        </Flex>
      </Stack>
      <ProgressGoal 
        kickstarterGoal={kickstarterGoal}
        isCompleted ={isCompleted}
        isActive ={isActive}
        isLastGoal ={isLastGoal}
        isFirstGoal ={isFirstGoal}
        progress = {progress}
        colorBar= {color}
        totalDeposited={totalDeposited} />
    </>
  );
};

export default Goal;
