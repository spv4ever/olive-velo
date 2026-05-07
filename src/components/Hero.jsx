function Hero() {
  return (
    <section id="top" className="hero section">
      <div className="hero-media image-placeholder" role="img" aria-label="Catalan masia and cycling ambience" />
      <div className="hero-content">
        <p className="eyebrow">cycling house retreat</p>
        <h1>A Mediterranean cycling retreat in Girona</h1>
        <p>
          A restored XV century Catalan masia where cycling, recovery, gastronomy and slow living
          meet.
        </p>
        <div className="cta-row">
          <a className="button button-primary" href="#concept">
            Discover the retreat
          </a>
          <a className="button button-secondary" href="#experience">
            Explore the experience
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
