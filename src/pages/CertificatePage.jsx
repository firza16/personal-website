import Certificates from "../components/Certificates";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

function CertificatePage() {
  return (
    <div>
      <Helmet>
        <title>Certifications — Firza Hakim</title>
        <meta name="description" content="A list of certifications and achievements earned by Firza Hakim in software development and related fields." />
        <meta property="og:title" content="Certifications — Firza Hakim" />
        <meta property="og:description" content="See certifications and professional achievements earned by Firza Hakim." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="w-full max-w-2xl mx-auto md:pt-12 pt-4 px-4 sm:px-6 lg:px-8">
        <Navbar />
        <Certificates />
      </div>
    </div>
  );
}

export default CertificatePage;
