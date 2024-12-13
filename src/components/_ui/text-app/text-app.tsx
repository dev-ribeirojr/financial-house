import { Text, TextProps } from "react-native";

export function TextApp(props: TextProps) {
  const { children, className, ...rest } = props
  return (
    <Text className={`text-primary-100 ${className}`} {...rest}>
      {children}
    </Text>
  )
}