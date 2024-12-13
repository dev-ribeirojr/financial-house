import { Image } from "react-native";

export function Logo() {
  return (
    <Image
      source={require("../../../../assets/images/logo.png")}
      resizeMode="center"
      className="max-w-[150px] max-h-[120px]"
    />
  )
}