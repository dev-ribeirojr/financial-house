import { Logo } from "@/components"
import { Slot } from "expo-router"
import { Keyboard, TouchableWithoutFeedback, View } from "react-native"

export default function Layout() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="items-center justify-center flex-1 ">
        <Logo />
        <Slot />
      </View>
    </TouchableWithoutFeedback>
  )
}