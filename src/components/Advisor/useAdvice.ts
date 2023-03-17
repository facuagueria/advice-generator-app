import { useEffect, useState } from 'react'

type Advice = {
  id: number
  advice: string
} | null

export default function useAdvice(): {
  advice: Advice
  isLoading: boolean
  getAdvice: () => Promise<void>
} {
  const [advice, setAdvice] = useState<Advice>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getAdvice = (): Promise<void> => {
    setIsLoading(true)
    return fetch(import.meta.env.VITE_API_URL, {
      cache: 'no-cache'
    })
      .then((response) => response.json())
      .then(({ slip }) => {
        setAdvice(slip)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    getAdvice()
  }, [])

  return { advice, isLoading, getAdvice }
}
