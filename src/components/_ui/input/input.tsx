import Entypo from '@expo/vector-icons/Entypo';
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View
} from "react-native";
import { useInput } from './use-input';

interface InputProps extends TextInputProps {
  label?: string
  isRequired?: boolean
  typePassword?: boolean
}

export function Input(data: InputProps) {
  const { label, isRequired = false, typePassword = false, ...rest } = data
  const {
    isActive,
    isVisiblePassword,
    toogleInputFocus,
    toogleVisibleText,
  } = useInput({ typePassword })

  return (
    <View>
      {label && (
        <Text className="mb-1 text-secondary-50">
          {label}
          {isRequired &&
            <Text className="text-red-600"> *</Text>
          }
        </Text>
      )}

      <View className={`border rounded-lg mb-2 flex-row items-center border-slate-300 transition-all ${isActive && "!border-blue-500"
        }`}>
        <TextInput
          className="px-4 py-[12px] placeholder:text-secondary-200 flex-1 text-secondary-50"
          onFocus={() => toogleInputFocus(true)}
          onBlur={() => toogleInputFocus(false)}
          secureTextEntry={!isVisiblePassword}
          {...rest}
        />
        {typePassword && (
          <TouchableOpacity activeOpacity={9} onPress={toogleVisibleText}>
            <View className={`border-l border-slate-300 w-12 h-12 items-center transition-all justify-center ${isActive && "!border-blue-500"}`}>
              {isVisiblePassword && (
                <Entypo name="eye" size={18} color="#bcc3c7" />
              )}
              {!isVisiblePassword && (
                <Entypo name="eye-with-line" size={18} color="#697179" />
              )}
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}