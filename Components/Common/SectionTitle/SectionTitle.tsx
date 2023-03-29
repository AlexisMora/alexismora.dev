import { type FC } from 'react'

interface Props {
  title: string
}
const SectionTitle: FC<Props> = ({ title }) => {
  return (
    <div className="flex flex-row justify-start items-start">
      <h2 className="text-white text-md md:text-2xl text-left font-GT-America-Expanded">
        {title}
      </h2>
      <div className="flex-grow border border-gray-600 mt-3 md:mt-4 ml-3"></div>
    </div>
  )
}

export default SectionTitle
