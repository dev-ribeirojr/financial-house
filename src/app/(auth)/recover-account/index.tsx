import { Button, Input, LinkApp, TextApp } from '@/components'
import { View, Text } from 'react-native'

export default function RecoverAccount() {
  return (
    <View className='w-full p-4'>
      <Input
        id='email'
        label='E-mail'
        isRequired
        placeholder='Digite seu email'
      />
      <Button
        text='Enviar email de recuperação '
        className='mt-4'
      />

      <TextApp className='mt-4 text-center text-primary-100'>
        Voltar para a <LinkApp href={"/sign-in"}>página de login.</LinkApp>
      </TextApp>

    </View>
  )
}