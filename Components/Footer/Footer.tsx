import Github from '../Vectors/Github'
import Linkedin from '../Vectors/Linkedin'
import Twitter from '../Vectors/Twitter'

const Footer = () => {
  return (
    <footer className="text-white font-GT-America-CT text-center flex flex-col justify-start items-center pb-20 mt-56">
      <div className="flex flex-col justify-start items-center">
        <div className="mt-2 flex flex-row">
          <a href="https://github.com/Alexismora" className="cursor-pointer">
            <Github />
          </a>
          <a href="https://twitter.com/NotoriusAlexis">
            <Twitter />
          </a>
          <a href="https://www.linkedin.com/in/%F0%9F%9A%80alexis-mora-sanchez-355335169/">
            <Linkedin />
          </a>
        </div>
        <a
          href="https://www.linkedin.com/in/%F0%9F%9A%80alexis-mora-sanchez-355335169/"
          className="hover:text-primary cursor-pointer transition ease-in-out duration-300"
        >
          Designed and Built by Alexis Mora
        </a>
      </div>
    </footer>
  )
}

export default Footer
