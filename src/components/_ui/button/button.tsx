import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  isLoading?: boolean
  text?: string
  arrowIcon?: boolean
  variant?: 'outline'
}

export function Button(data: ButtonProps) {
  const {
    isLoading,
    text = null,
    arrowIcon = false,
    className,
    variant,
    ...rest
  } = data

  return (
    <TouchableOpacity
      className={`bg-primary-700 p-4 rounded-lg flex-row items-center justify-center 
      ${variant === "outline" && 'bg-transparent border border-secondary-100'} ${arrowIcon && 'justify-between'} ${className}`}
      {...rest}
    >
      <View className='flex-row gap-2'>
        {isLoading && (
          <ActivityIndicator color="white" />
        )}
        {text && (
          <Text className='text-white font-semibold'>{text}</Text>
        )}
      </View>
      {arrowIcon && (
        <FontAwesome6 name="arrow-right" size={14} color="white" />
      )}
    </TouchableOpacity>
  )
}