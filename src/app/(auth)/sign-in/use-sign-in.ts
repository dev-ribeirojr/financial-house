import { useState } from "react"

export function useSignIn() {
  const [isLoading, setIsLoading] = useState(false)

  return { isLoading }
}