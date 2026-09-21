import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Story from "./sections/Story";
import Gallery from "./sections/Gallery";
import Moments from "./sections/Moments";
import Transition from "./sections/Transition";
import Proposal from "./sections/Proposal";
import Capsule from "./sections/Capsule";
import FinalSection from "./sections/FinalSection";
import SoundToggle from "./components/ui/SoundToggle";
import { AudioProvider } from "./context/AudioProvider";

export default function App() {
  return (
    <AudioProvider>
      <Navbar />
      <SoundToggle />

      <main>
        <Hero />
        <Story />
        <Gallery />
        <Moments />
        <Transition />
        <Proposal />
        <Capsule />
        <FinalSection />
      </main>
    </AudioProvider>
  );
}
