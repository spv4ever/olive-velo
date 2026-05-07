function LocationSection() {
  const items = [
    'Girona · Costa Brava',
    'Camí de Girona · Quart',
    'Direct access to greenways',
    'Rocacorba · Els Àngels · Costa Brava routes'
  ];

  return (
    <section id="location" className="section">
      <div className="section-head">
        <p className="eyebrow">Location</p>
        <h2>Girona, cycling territory</h2>
      </div>
      <div className="two-col">
        <p>
          Girona has become one of Europe’s most influential cycling hubs, known for its year-round
          riding conditions, diverse landscapes and international cycling culture.
        </p>
        <p>
          From Quart and Camí de Girona, Olive & Velo offers immediate access to greenways and
          legendary roads connecting Rocacorba, Els Àngels and the Costa Brava coastline.
        </p>
      </div>
      <ul className="info-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default LocationSection;
