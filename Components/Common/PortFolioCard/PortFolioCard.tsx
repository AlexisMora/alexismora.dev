import { type FC } from 'react'
interface Props {
  title: string
  description: string
  projectLink: string
  githubLink: string
}
const PortFolioCard: FC<Props> = ({
  title,
  description,
  projectLink,
  githubLink
}) => {
  return (
    <div className="bg-primary rounded-2xl p-6 w-full">
      <h2 className="text-black text-md md:text-2xl font-GT-America-Expanded font-extrabold text-left">
        {title}
      </h2>
      <p className="text-black text-md md:text-lg md:w-9/12 font-GT-America-Standard">
        {description}
      </p>
      <div className="mt-4">
        <a
          href={projectLink}
          className="font-GT-America-Standard cursor-pointer transition ease-in-out duration-300 bg-dark hover:bg-primary text-primary hover:text-dark border border-primary hover:border hover:border-dark font-bold px-4 py-2 rounded-lg"
        >
          Project
        </a>
        <a
          href={githubLink}
          className="ml-1 font-GT-America-Standard cursor-pointer transition ease-in-out duration-300 bg-dark hover:bg-primary text-primary hover:text-dark border border-primary hover:border hover:border-dark font-bold px-4 py-2 rounded-lg"
        >
          Github
        </a>
      </div>
    </div>
  )
}

export default PortFolioCard
