import { Circle, Icon, SquareProps } from "@chakra-ui/react";
import { Check } from "phosphor-react";

interface RadioCircleProps extends SquareProps {
  isCompleted: boolean;
  isActive: boolean;
  backgroundColor: any;
  isTimeout: boolean;
  goalNumber: number;
}

const GoalCircle = (props: RadioCircleProps) => {
  const { backgroundColor, isCompleted, isActive, goalNumber } = props;
  return (
    <Circle
      zIndex={9}
      size="7"
     // bg={isCompleted ? "accent" : "inherit"}
      backgroundColor={backgroundColor.colorScheme +'.'+backgroundColor.variant}
      color={isCompleted ? "white" :  "gray.400"}
    >
      {isCompleted ? (
        <Check size={20} />
      ) : (
        <Circle fontSize={'sm'} color={isActive ? "white" : "gray.900"} size="1">
          {goalNumber}
        </Circle>
      )}
    </Circle>
  );
};

export default GoalCircle;
