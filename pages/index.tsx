import ContactSection from './Components/ContactSection/ContactSection'
import Footer from './Components/Footer/Footer'
import HeroSection from './Components/HeroSection/HeroSection'
import MainSection from './Components/MainSection/MainSection'
import PortFolioSection from './Components/PortFolioSection/PortFolioSection'

export default function Home() {
  return (
    <div className="mx-12">
      <HeroSection />
      <MainSection title="About me">
        <div className="mt-2 flex flex-row justify-start items-start ">
          <p className="text-white text-md md:text-lg md:w-9/12 font-GT-America-Standard">
            I’m a software engineer with focus on web technologies. My main
            expertise is in frontend development using React/NextJS and Vue, as
            well backend development using Django-REST framework and NestJS.
          </p>
        </div>
        <div className="mt-2 flex flex-row justify-start items-start ">
          <p className="text-white text-md md:text-lg md:w-9/12 font-GT-America-Standard">
            Despite not having extensive experience, I have a passion for UX/UI
            design and am actively learning in this field. I am from Palma de
            Mallorca, and I am looking forward to continuing to grow in my
            career.
          </p>
        </div>
      </MainSection>
      <PortFolioSection title="Some of My Works" />
      <ContactSection />
      <Footer />
    </div>
  )
}
