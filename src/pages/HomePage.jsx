import AltProfile from "../components/AltProfile";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Footer from "../components/footer";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Skills from "../components/Skills";


function HomePage() {
  return (
    <div className="relative overflow-hidden">
      

      <div className="relative z-10">

        <main id="content">
          <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
           
            <AltProfile />
            <Experience />
            <Skills />
          </div>
        </main>

        <Footer />
      </div>

    </div>
  );
}


export default HomePage;
