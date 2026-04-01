function Leadership() {
  const experiences = [
    {
      org: "Smart Interviews",
      role: "DSA Mentor",
      tag: "Mentoring",
      desc: "Guided peer learners by solving coding challenges, reviewing DSA concepts, and improving interview problem-solving skills.",
    },
    {
      org: "Codess.Cafe",
      role: "Mentee",
      tag: "Growth Program",
      desc: "Selected for a women-in-tech mentorship program focused on structured career guidance and software engineering skill development.",
    },
  ];

  return (
    <section id="leadership" className="section leadership-section">
      <h2>Leadership Experience</h2>
      <p className="leadership-subtitle">
        Mentoring, collaboration, and continuous learning through communities.
      </p>
      <div className="leadership-timeline">
        {experiences.map((item, index) => (
          <article className="leadership-card" key={item.org + item.role}>
            <span className="leadership-dot" aria-hidden="true" />
            <div className="leadership-card-inner">
              <div className="leadership-top">
                <h3>{item.org}</h3>
                <span className="leadership-tag">{item.tag}</span>
              </div>
              <p className="leadership-role">{item.role}</p>
              <p className="leadership-desc">{item.desc}</p>
              <span className="leadership-index">0{index + 1}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Leadership;
