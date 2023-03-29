import { type FC } from 'react'
import PortFolioCard from '../Common/PortFolioCard/PortFolioCard'
import SectionTitle from '../Common/SectionTitle/SectionTitle'

interface Props {
  title: string
}

const PortFolioSection: FC<Props> = ({ title }) => {
  return (
    <section
      id="myWorks"
      className="flex flex-col items-center justify-center text-white h-screen"
    >
      <div className="md:w-1/2 h-100 w-full">
        <SectionTitle title={title} />
      </div>
      <div className="mt-2 flex flex-col justify-start items-start md:w-1/2 h-100">
        <PortFolioCard
          title="Crypto Exchange"
          description="Crypto exchange project i made with vue, tailwindcss and deployed on netlify, used the coin market cap API."
          projectLink="https://cryptoexchange-alexis.netlify.app/"
          githubLink="https://github.com/AlexisMora/cryptoExchange"
        />
        <div className="mt-6 w-full">
          <PortFolioCard
            title="Pokédex"
            description="Pokédex project i made with React and redux, tailwindcss and deployed on vercel, used the pokeapi."
            projectLink="https://pokedex.alexismora.dev/"
            githubLink="https://github.com/AlexisMora/pokedex"
          />
        </div>
      </div>
    </section>
  )
}

export default PortFolioSection
