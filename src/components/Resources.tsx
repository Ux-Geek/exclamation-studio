import React from 'react';

const brandingExperts = [
  { name: "Mark Schaefer", handle: "@markwschaefer", url: "https://businessesgrow.com" },
  { name: "Brett Williams", handle: "@BrettFromDJ", url: "https://designjoy.co" },
  { name: "Alex Cattoni", handle: "@AlexCattoni", url: "https://alexcattoni.com" },
  { name: "Neal Schaffer", handle: "@NealSchaffer", url: "https://nealschaffer.com" },
  { name: "Collin Rutherford", handle: "@collin_ruth89", url: "https://founderbrands.io" },
  { name: "Chris Do", handle: "@theChrisDo", url: "https://thefutur.com" },
];

const brandingExpertsRow2 = [
  { name: "Mike Kim", handle: "@mikekim", url: "https://mikekim.com" },
  { name: "Sahil Bloom", handle: "@sahilbloom", url: "https://sahilbloom.com" },
  { name: "Justin Welsh", handle: "@thejustinwelsh", url: "https://justinwelsh.me" },
  { name: "Austin Brawner", handle: "@austinbrawner", url: "https://brandgrowthexperts.com" },
  { name: "Nik Sharma", handle: "@mrsharma", url: "https://niksharma.com" },
  { name: "Aja Singer", handle: "@ajasinger", url: "https://ajasinger.substack.com" },
];

export const Resources: React.FC = () => {
  const row1 = [...brandingExperts, ...brandingExperts, ...brandingExperts];
  const row2 = [...brandingExpertsRow2, ...brandingExpertsRow2, ...brandingExpertsRow2];

  return (
    <section className="resources-section" id="resources">
      <p className="resources-label">Trusted voices in branding & strategy</p>
      
      <div className="marquee-container">
        <div className="marquee-track left">
          {row1.map((expert, i) => (
            <a
              key={`r1-${expert.handle}-${i}`}
              href={expert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="marquee-item"
            >
              <span className="dot" aria-hidden="true"></span>
              <span>{expert.name}</span>
            </a>
          ))}
        </div>
        
        <div className="marquee-track right">
          {row2.map((expert, i) => (
            <a
              key={`r2-${expert.handle}-${i}`}
              href={expert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="marquee-item"
            >
              <span className="dot" aria-hidden="true"></span>
              <span>{expert.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
