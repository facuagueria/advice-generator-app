import { Divider, Button, IconDice } from 'components'
import useAdvice from './useAdvice'

function Advisor(): JSX.Element {
  const { getAdvice, advice, isLoading } = useAdvice()

  return (
    <div className="relative flex min-h-[364px] w-[540px] flex-col items-center justify-center rounded-[15px] bg-dark-grayish-blue px-8 text-center md:px-12">
      {isLoading && <span className="text-white">Loading...</span>}
      {!isLoading && (
        <>
          <h3 className="mb-10 text-[13px] font-extrabold leading-[18px] tracking-[4.09px] text-neon-green">
            ADVICE #{advice?.id}
          </h3>
          <p className="mb-10 text-[28px] font-extrabold leading-[38px] tracking-[-0.3px] text-light-cyan">
            {`"${advice?.advice}"`}
          </p>
          <Divider />
          <Button handleClickButton={getAdvice}>
            <IconDice />
          </Button>
        </>
      )}
    </div>
  )
}
export default Advisor
