"use client";

import AboutSection from "@/components/AboutSection";
import ActivityArea from "@/components/ActivityArea";
import AssociationsMeeting from "@/components/AssociationsMeeting";
import ExplorationSection from "@/components/ExplorationSection";
import Header from "@/components/Header";
import HeroPage from "@/components/HeroPage";
import Map from "@/components/Map";
import OurTeams from "@/components/OurTeams";
import ThankYouContact from "@/components/ThankYouContact";
import WorkProcess from "@/components/WorkProcess";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <HeroPage />
        <AboutSection />
        <WorkProcess />
        <ExplorationSection />
        <Map />
        <ActivityArea />
        <OurTeams />
        <AssociationsMeeting />
        <ThankYouContact />
      </div>
    </>
  );
}
