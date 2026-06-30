import React from 'react';

const brandingExperts = [
  { name: "Mark Schaefer", handle: "@markwschaefer", url: "https://businessesgrow.com" },
  { name: "Brett Williams", handle: "@BrettFromDJ", url: "https://designjoy.co" },
  { name: "Alex Cattoni", handle: "@AlexCattoni", url: "https://alexcattoni.com" },
  { name: "Neal Schaffer", handle: "@NealSchaffer", url: "https://nealschaffer.com" },
  { name: "Collin Rutherford", handle: "@collin_ruth89", url: "https://founderbrands.io" },
  { name: "Chris Do", handle: "@theChrisDo", url: "https://thefutur.com" },
  { name: "Mike Kim", handle: "@mikekim", url: "https://mikekim.com" },
  { name: "Sahil Bloom", handle: "@sahilbloom", url: "https://sahilbloom.com" },
  { name: "Justin Welsh", handle: "@thejustinwelsh", url: "https://justinwelsh.me" },
  { name: "Austin Brawner", handle: "@austinbrawner", url: "https://brandgrowthexperts.com" },
  { name: "Nik Sharma", handle: "@mrsharma", url: "https://niksharma.com" },
  { name: "Aja Singer", handle: "@ajasinger", url: "https://ajasinger.substack.com" },
];

export const Resources: React.FC = () => {
  // Double the items for seamless marquee loop
  const doubled = [...brandingExperts, ...brandingExperts];

  return (
    <section className="resources-section" id="resources">
      <p className="resources-label">Trusted voices in branding & strategy</p>
      <div className="marquee-track">
        {doubled.map((expert, i) => (
          <a
            key={`${expert.handle}-${i}`}
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
    </section>
  );
};
