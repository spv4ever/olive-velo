const experienceItems = [
  {
    title: 'Ride',
    text: 'Curated routes, ride planning support, dedicated bike room and direct links to Girona greenways.'
  },
  {
    title: 'Recover',
    text: 'The Sanctuary with pool, sauna, physiotherapy on demand and functional training spaces.'
  },
  {
    title: 'Taste',
    text: 'Oli & Pa and a Mediterranean rhythm of brunch, specialty coffee, local aperitivo and recovery meals.'
  },
  {
    title: 'Rest',
    text: '15 serene rooms inside a restored masia, with natural materials and a quiet, restorative atmosphere.'
  }
];

function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="section-head">
        <p className="eyebrow">Experience</p>
        <h2>The Olive & Velo Experience</h2>
      </div>
      <div className="card-grid">
        {experienceItems.map((item) => (
          <article className="card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;
