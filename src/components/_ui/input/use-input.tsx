import { useState } from "react"

interface UseInputProps {
  typePassword: boolean
}

export function useInput(data: UseInputProps) {
  const { typePassword } = data
  const [isActive, setIsActive] = useState(false)
  const [isVisiblePassword, setIsVisiblePassword] = useState(!typePassword)

  function toogleVisibleText() {
    setIsVisiblePassword(!isVisiblePassword)
  }

  function toogleInputFocus(isFocus: boolean) {
    setIsActive(isFocus)
  }

  return { isActive, isVisiblePassword, toogleVisibleText, toogleInputFocus }
}