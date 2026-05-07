const guests = [
  {
    title: 'International cyclists',
    text: 'Solo riders and couples seeking iconic routes, premium comfort and an international atmosphere.'
  },
  {
    title: 'Training camps & groups',
    text: 'Teams and clubs looking for structured ride logistics, recovery spaces and quality shared living.'
  },
  {
    title: 'Lifestyle travellers',
    text: 'Guests inspired by Mediterranean slow living, nature, design, gastronomy and conscious wellbeing.'
  }
];

function GuestSection() {
  return (
    <section className="section">
      <div className="section-head">
        <p className="eyebrow">Guest Profile</p>
        <h2>Designed for cyclists, travellers and slow living seekers</h2>
      </div>
      <div className="card-grid">
        {guests.map((guest) => (
          <article className="card" key={guest.title}>
            <h3>{guest.title}</h3>
            <p>{guest.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default GuestSection;
