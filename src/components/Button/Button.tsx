import { MouseEventHandler, ReactNode } from 'react'

type Props = {
  handleClickButton: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
}

function Button({ handleClickButton, children }: Props): JSX.Element {
  return (
    <button
      className="absolute -bottom-8 flex h-[64px] w-[64px] items-center justify-center rounded-[68px] bg-neon-green hover:shadow-[0_0_40px] hover:shadow-neon-green active:shadow-[0_0_40px] active:shadow-neon-green"
      onClick={handleClickButton}
    >
      {children}
    </button>
  )
}
export default Button
