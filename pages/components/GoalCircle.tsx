import { Circle, Icon, SquareProps } from '@chakra-ui/react'
import { Check } from 'phosphor-react'

interface RadioCircleProps extends SquareProps {
  isCompleted: boolean
  isActive: boolean
}

export const GoalCircle = (props: RadioCircleProps) => {
  const { isCompleted, isActive } = props
  return (
    <Circle
      size="8"
      bg={isCompleted ? 'accent' : 'inherit'}
      borderWidth={isCompleted ? '0' : '2px'}
      borderColor={isActive ? 'accent' : 'inherit'}
      {...props}
    >
      {isCompleted ? (
        <Check size={32} />
      ) : (
        <Circle bg={isActive ? 'accent' : 'border'} size="3" />
      )}
    </Circle>
  )
}
