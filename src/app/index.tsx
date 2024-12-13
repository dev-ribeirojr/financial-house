import { Link } from 'expo-router'
import { View, Text } from 'react-native'

export default function SignIn() {
  return (
    <View>
      <Text>PÁGINA HOME</Text>
      <Link href={'/sign-in'}>Acessar página de login</Link>
    </View>
  )
}