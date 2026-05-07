import React from 'react';
const services = [
  'Secure bike storage',
  'Bike wash & basic workshop',
  'Cycling laundry',
  'Guided routes',
  'Team room',
  'Ride fuel',
  'Recovery meals',
  'Physiotherapy on demand'
];

function CyclingServicesSection() {
  return (
    <section id="cycling" className="section">
      <div className="section-head">
        <p className="eyebrow">Cycling</p>
        <h2>Cycling services</h2>
      </div>
      <ul className="services-grid">
        {services.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>
    </section>
  );
}

export default CyclingServicesSection;
