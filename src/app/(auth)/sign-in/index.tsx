import { Button, Input, LinkApp, TextApp } from '@/components'
import { View } from 'react-native'

export default function SignIn() {
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

      <View className='items-end justify-end flex-col'>
        <LinkApp
          className='text-right mt-1 w-[160px]'
          href={"/recover-account"}>Esqueci minha senha.</LinkApp>
      </View>
      <Button
        text='Acessar '
        className='mt-4'
      />

      <TextApp className='mt-4 text-center'>
        Sou novo por aqui. <LinkApp href={"/sign-up"}>Criar uma conta?</LinkApp>
      </TextApp>

    </View>

  )
}