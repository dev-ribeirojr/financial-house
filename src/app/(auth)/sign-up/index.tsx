import { Button, Input, LinkApp, TextApp } from '@/components'
import { View } from 'react-native'

export default function SignUp() {
  return (
    <View className='w-full p-4'>
      <Input
        id='email'
        label='E-mail'
        isRequired
        placeholder='Digite seu email'
      />
      <Input
        id='password'
        label='Password'
        isRequired
        typePassword
        placeholder='******'
      />
      <Button
        text='Criar conta'
        className='mt-4'
      />

      <TextApp className='mt-4 text-center'>
        Já possue uma conta? <LinkApp href={"/sign-in"}>Acessar minha conta.</LinkApp>
      </TextApp>

    </View>
  )
}