import Certificate from "./Certificate";

function Certificates() {
  const certificates = [
    "sertif-bangkit.jpeg",
    "sertif-kominfo-webdev.jpg",
    "sertif-bekup.jpg",
    "sertif-udemy-fullstack.jpg",
    "sertif-ibm-express.jpg",
    "sertif-ibm-devops.jpg",
    "sertif-ibm-agile.jpg",
    "sertif-ibm-js.jpg",
    "sertif-ibm-htmlcssjs.jpg",
    "sertif-ibm-softeng.jpg",
    "sertif-ibm-github.jpg",
    "sertif-cloud-eng.jpg",
    "sertif-backend-gcp.jpg",
    "sertif-ml-gcp.jpeg",
    "sertif-js.jpg",
    "sertif-dart.jpg",
    "sertif-flutter-pemula.jpg",
    "sertif-fundamental-flutter.jpeg",
    "sertif-ml-flutter.jpeg",
    "sertif-fe.jpeg",
    "sertif-webdev.jpg",
    "sertif-github.jpg",
    "sertif-pm.jpeg",
    "sertif-dasar-softeng.jpg",
    "sertif-ai.jpg",
    "sertif-solid.jpeg",
    "sertif-logic.jpg",
  ];

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8">
        {certificates.map((file, index) => (
          <Certificate key={index} img={`/img/${file}`} />
        ))}
      </div>
    </div>
  );
}

export default Certificates;
