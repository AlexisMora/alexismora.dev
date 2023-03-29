import { type FC } from 'react'
import SectionTitle from '../Common/SectionTitle/SectionTitle'

interface Props {
  title: string
  children: React.ReactNode
}

const MainSection: FC<Props> = ({ title, children }) => {
  return (
    <section className="flex flex-col items-center justify-center text-white h-screen">
      <div className="md:w-1/2 h-100 w-full">
        <SectionTitle title={title} />
        <>{children}</>
      </div>
    </section>
  )
}

export default MainSection
