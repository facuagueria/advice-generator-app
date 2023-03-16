import { Divider, Button, IconDice } from 'components'

function Advisor(): JSX.Element {
  //Todo: Pasar a hook
  const handleClickButton = () => {
    alert('test')
  }
  return (
    <div className="flex min-h-[364px] w-[540px] flex-col items-center justify-center rounded-[15px] bg-dark-grayish-blue px-8 text-center md:px-12">
      <h3 className="mb-10 text-[13px] font-extrabold leading-[18px] tracking-[4.09px] text-neon-green">
        ADVICE #117
      </h3>
      <p className="mb-10 text-[28px] font-extrabold leading-[38px] tracking-[-0.3px] text-light-cyan">
        “It is easy to sit up and take notice, what's difficult is getting up
        and taking action.”
      </p>
      <Divider />
      <Button handleClickButton={handleClickButton}>
        <IconDice />
      </Button>
    </div>
  )
}
export default Advisor
