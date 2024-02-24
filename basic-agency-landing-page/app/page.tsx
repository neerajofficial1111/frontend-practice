import Footer from "@/components/footer";
import Header from "@/components/front-page/header";
import VideoBackground from "@/components/front-page/video-background";
import AwardSection from "@/components/section/award-section";
import WorkSection from "@/components/section/work-section";

export default function Home() {

  return (
    <main>
      <div className="md:min-h-screen min-h-[70vh]">
        <VideoBackground />
        <Header />
      </div>
      <AwardSection />
      <WorkSection />
      <Footer />
    </main>
  );
}
