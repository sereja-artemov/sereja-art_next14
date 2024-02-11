import Link from 'next/link'

const Contacts = () => {
  return (
    <>
      <h1 className='block-title'>
        Контакты
      </h1>
      <p className='block mb-8 max-sm:mb-5'>Если вы заинтересованы в сотрудничестве или вам нужна помощь <br/> с проектом, пожалуйста, напишите мне на email</p>
      <a href='mailto:artemov46@gmail.com' className='inline-block px-6 py-3 mb-8 border rounded-full lg:text-5xl border-darkPrimary/50 dark:border-whiteSecondary/30'>artemov46@gmail.com</a>
      <p className='block mb-8 max-sm:mb-5'>или в любом мессенджере</p>
      <div className='block mb-8 max-sm:mb-5'>
        <span className="flex gap-5 font-medium lg:text-5xl">
          <Link className='inline-block px-6 py-3 border rounded-full border-darkPrimary/50 dark:border-whiteSecondary/30' href='https://t.me/sereja_art' target='_blank'>Telegram</Link>
          <Link className='inline-block px-6 py-3 border rounded-full border-darkPrimary/50 dark:border-whiteSecondary/30' href='https://wa.me/79513339923' target='_blank'>WhatsApp</Link>
        </span>
      </div>
      <p className='block mb-8 max-sm:mb-5'>я в соцсетях</p>
      <div className=''>
        <Link href='https://vk.com/sereja_art' target='_blank' className='inline-block px-6 py-3 border rounded-full lg:text-5xl border-darkPrimary/50 dark:border-whiteSecondary/30'>ВКонтакте</Link>
      </div>
    </>
  )
}

export default Contacts