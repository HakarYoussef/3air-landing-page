import React from 'react';
import './App.css';
import FrictionlessExperience from './components/FrictionlessExperience/FrictionlessExperience';
import Header from './components/Header/Header';
import Hero from './components/HeroSection/Hero';
import DefiAndBanking from './components/DefiAndBanking/DefiAndBanking';
import NFTsandOwnership from './components/NFTsAndOwnership/NFTsandOwnership';
import DigitalIdentities from './components/DigitalIdentities/DigitalIdentities';
import Architecture from './components/Architecture/Architecture';
import LogosSection from './components/HeroSection/LogosSection';
import NewUsers from './components/NewUsers/NewUsers';
import Team from './components/CoreTeam/Team';
import Edication from './components/Edication/Edication';
import Roadmap from './components/Roadmap/Roadmap';
import Subscription from './components/subscription/Subscription';
import Advisors from './components/Advisors/Advisors';
import Partners from './components/Partners/Partners';
import Backers from './components/Backers/Backers';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <>
        <Header />
        <Hero />
        <LogosSection />
        <NewUsers />
        <FrictionlessExperience />
        <DefiAndBanking />
        <Edication />
        <NFTsandOwnership />
        <DigitalIdentities />
        <Architecture />
        <Team />
        <Advisors />
        <Partners />
        <Backers />
        <Roadmap />
        <Subscription />
        <Footer />
      </>
    </>
  );
}
export default App;
