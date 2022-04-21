import { Circle, Icon, SquareProps } from "@chakra-ui/react";
import { Check } from "phosphor-react";

interface RadioCircleProps extends SquareProps {
  isCompleted: boolean;
  isActive: boolean;
  goalNumber: number;
}

const GoalCircle = (props: RadioCircleProps) => {
  const { isCompleted, isActive, goalNumber } = props;
  return (
    <Circle
      size="8"
      bg={isCompleted ? "accent" : "inherit"}
      backgroundColor={isCompleted ? "green.400" : "indigo.500"}
      color={isCompleted ? "white" : "gray.400"}
      borderWidth={isCompleted ? "0" : "2px"}
      borderColor={isActive ? "accent" : "inherit"}
    >
      {isCompleted ? (
        <Check size={32} />
      ) : (
        <Circle  color={isActive ? "white" : "gray.400"} bg={isActive ? "accent" : "border"} size="3">
          {goalNumber}
        </Circle>
      )}
    </Circle>
  );
};

export default GoalCircle;
