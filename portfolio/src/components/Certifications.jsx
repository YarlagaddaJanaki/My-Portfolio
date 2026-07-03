import "./Certifications.css";

function Certifications() {
  const certificates = [
    {
      title: "Programming in Java",
      provider: "NPTEL - IIT Madras",
      year: "2024",
      link: "/certificates/nptel-java.pdf",
    },
    {
      title: "DSA & Problem Solving",
      provider: "Smart Interviews",
      year: "2025",
      link: "https://smartinterviews.in/certificate/ad340b27",
    },
    {
      title: "DSA & OOP",
      provider: "Take U Forward (Striver)",
      year: "2025",
      link: "/certificates/tuf-dsa.pdf",
    },
    {
      title: "MERN Stack Development",
      provider: "Udemy",
      year: "2025",
      link: "/certificates/mern.pdf",
    },
  ];

  return (
    <section id="certifications" className="section">
      <h2>Certifications</h2>

      <div className="certifications-container">
        <div className="certifications-grid">
          {certificates.map((certificate) => (
            <div className="certificate-card" key={certificate.title}>
              <div className="certificate-icon">🏆</div>

              <h3>{certificate.title}</h3>

              <p className="provider">{certificate.provider}</p>

              <p className="year">{certificate.year}</p>

              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-btn"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;