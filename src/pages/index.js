import React from "react"
import "../../reset.css"
import "../styles/main.css"
import {
  Hero,
  ContentSection,
  CrossRevealSection,
  ProductSection,
  VideoSequence,
} from "../components/"
import FaceOne from "../assets/images/faceOne.png"
import LandscapeOne from "../assets/images/landscapeOne.png"
import LandscapeTwo from "../assets/images/LandscapeTwo.png"

export default function Home() {
  return (
    <>
      <Hero />
      <ProductSection />
      <ContentSection
        title="Take care"
        text="Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. "
      />
      <CrossRevealSection
        face={FaceOne}
        landscape={LandscapeOne}
        name="Joe Dow"
        job="Founder"
        sentenceOne="We only launch"
        sentenceTwo="what we love"
        crossreveal="xPercent"
      />
      <ContentSection
        title="Take care twice"
        text="Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. "
      />
      <CrossRevealSection
        face={FaceOne}
        landscape={LandscapeTwo}
        name="Joe Dow"
        job="Founder"
        sentenceOne="We only launch"
        sentenceTwo="what we love"
        crossreveal="yPercent"
      />
      <ContentSection
        title="Take care 3"
        text="Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. "
      />
      <VideoSequence />
    </>
  )
}
