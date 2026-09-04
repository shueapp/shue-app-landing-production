import {
  Faq,
  FinalCTA,
  Footer,
  Hero,
  HowItWorks,
  IndustrySpecific,
  Navbar,
  Solution,
} from "@/components";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark">
      <Navbar />
      <Hero />
      <Solution />
      <HowItWorks />
      <IndustrySpecific />
      <Faq />
      <FinalCTA />
      <Footer />
    </div>
  );
}
