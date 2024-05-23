import React from 'react';

function CompanyDescription() {
  return (
    <div className="company-description">
      <h1 className="heading">
        <strong>About Our Company</strong>
      </h1>
      <div style={{paddingLeft:50}} className="description-content">
        <p className="home-about-body">
          <b className='purple'>Wicatet Farms Plant Nursery</b> is a wholesale foliage nursery located in Eustis, Florida. We specialize in growing and shipping a wide variety of greenhouse plants for both indoor and outdoor use, ensuring vibrant, attractive, and hardy plants year-round.
        </p>
        <p className="home-about-body">
          With a focus on attentive and reliable customer service, Wicatet Farms Plant Nursery is dedicated to meeting individual needs and preferences, including special requests. We pride ourselves on being small enough to provide personalized care while having the resources to fulfill even the most challenging plant requirements.
        </p>
      </div>
    </div>
  );
}

export default CompanyDescription;
