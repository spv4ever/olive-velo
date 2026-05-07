const spaces = [
  {
    title: 'La Masia',
    text: 'A XV century Catalan home reimagined with contemporary comfort and timeless elegance.'
  },
  {
    title: 'Oli & Pa',
    text: 'An all-day social table for Mediterranean brunch, artisanal coffee and local flavours.'
  },
  {
    title: 'The Sanctuary',
    text: 'A wellness area for regeneration: water, heat, bodywork and mindful recovery rituals.'
  },
  {
    title: 'Bike Room',
    text: 'A secure, practical and rider-focused hub for storage, setup and pre-ride preparation.'
  },
  {
    title: "L’Arribada private parking",
    text: 'Private arrival parking designed for smooth logistics for guests, groups and cycling teams.'
  }
];

function SpacesSection() {
  return (
    <section id="spaces" className="section">
      <div className="section-head">
        <p className="eyebrow">Spaces</p>
        <h2>Signature spaces for riding, living and restoring</h2>
      </div>
      <div className="spaces-grid">
        {spaces.map((space) => (
          <article className="space-card" key={space.title}>
            <div className="space-image image-placeholder" aria-hidden="true" />
            <h3>{space.title}</h3>
            <p>{space.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SpacesSection;
