'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

let scores = {
  'My Marketing Fitness': {
    performance: 100,
    accessibility: 94,
    best: 95,
    seo: 100,
    url: 'https://www.mymarketingfitness.com',
  },
  'Roof Maxx': {
    performance: 93,
    accessibility: 95,
    best: 100,
    seo: 90,
    url: 'https://www.roofamp.com/',
  },
  'Roofing School': {
    performance: 100,
    accessibility: 94,
    best: 100,
    seo: 100,
    url: 'https://www.roofing-school.com',
  },
  'Roofs Local': {
    performance: 100,
    accessibility: 98,
    best: 100,
    seo: 100,
    url: 'https://www.roofslocal.com',
  },
  'BEM Direct': {
    performance: 100,
    accessibility: 94,
    best: 100,
    seo: 100,
    url: 'https://www.bemdirect.com',
    stats: {
      fcp: 0.3,
      lcp: 0.4,
      tbt: 0,
      si: 1.1,
      cls: 0.01,
    },
  },
};

const stats = [0.3, 0.4, 0, 1.1, 0.01];
const labels = ['FCP', 'LCP', 'TBT', 'SI', 'CLS'];
const colors = ['#a3b18a', '#588157', '#3a5a40', '#344e41', '#6b9080'];

const displayStats = stats.map((val, i) => (i === 3 ? val : 1 - val));

function polarToCartesian(cx: number, cy: number, r: number, angle: number) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

function describeArc(
  cx: number,
  cy: number,
  r: number,
  startAngle: number,
  endAngle: number
) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);

  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

  return [
    'M',
    start.x,
    start.y,
    'A',
    r,
    r,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(' ');
}

export default function SiteScores() {
  const [animated, setAnimated] = useState(false);
  const [test, startTest] = useState(false);
  const [loadTimes, setLoadTimes] = useState({
    pf: 0,
    boot: 0,
    fcp: 0,
    env: '',
  });
  const [terminalOutput, setTerminalOutput] = useState<string>('');

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const center = 100;
  const radius = 70;
  const gap = 6;
  const total = stats.length;
  const angleStep = 360 / total;

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <>
        <h2 className="text-2xl font-bold mt-6 border-2 border-gray-800/20 text-gray-800/80 px-4 py-2 rounded-md text-center w-full max-w-xs">
          Top Performer
        </h2>
        <h2 className="text-xl font-bold">BEM Direct Roofing</h2>
        <p className="text-md text-gray-500 mt-[-1rem]">Hydration Stats</p>
        <svg width="200" height="200" viewBox="0 0 200 200">
          {displayStats.map((val, i) => {
            const baseStart = i * angleStep + gap;
            const baseEnd = baseStart + angleStep - gap * 2;

            const actualEnd =
              baseStart + (baseEnd - baseStart) * Math.min(val, 1);

            const bgPath = describeArc(
              center,
              center,
              radius,
              baseStart,
              baseEnd
            );
            const fgPath = describeArc(
              center,
              center,
              radius,
              baseStart,
              actualEnd
            );

            return (
              <g key={i} className="transition-all duration-500 ease-in-out">
                {/* Background track */}
                <path
                  d={bgPath}
                  fill="none"
                  stroke="#e0e0e0"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                {/* Animated foreground stat */}
                <path
                  d={fgPath}
                  fill="none"
                  stroke={colors[i]}
                  strokeWidth="10"
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: 300,
                    strokeDashoffset: animated ? 0 : 300,
                    transition: `stroke-dashoffset 0.8s ease-in-out ${i * 0.2}s`,
                  }}
                />
                <circle
                  cx="100"
                  cy="100"
                  r="60"
                  fill="green"
                  opacity="0.1"
                  className={`${animated ? 'opacity-10' : 'opacity-0'} duration-300 ease-in-out`}
                />
                <text
                  x="100"
                  y="113"
                  textAnchor="middle"
                  className={`text-4xl fill-black font-bold antialiased transistion ${animated ? 'opacity-20' : 'opacity-0'} duration-300 ease-in-out`}
                >
                  {scores['BEM Direct'].performance}
                </text>
              </g>
            );
          })}
        </svg>

        <div className="grid grid-cols-5 gap-4 text-sm text-center">
          {labels.map((label, i) => (
            <div key={label} className="flex flex-col items-center">
              <div
                className="w-3 h-3 rounded-full mb-1"
                style={{ backgroundColor: colors[i] }}
              />
              <span>{label}</span>
              <span className="text-gray-500 text-xs">{stats[i]}</span>
            </div>
          ))}
        </div>
        <div>
          Lighthouse Performance Score: {scores['BEM Direct'].performance}
        </div>
        <h2 className="text-xl font-bold mt-4">Other Sites</h2>
        {Object.entries(scores).map(([site, siteScores], i) => (
          <div
            key={site}
            className="text-sm text-gray-500 text-center px-4 mb-2"
          >
            {
              <Link href={siteScores.url} className="underline">
                {site}
              </Link>
            }{' '}
            | Performance: {siteScores.performance} | Accessibility:{' '}
            {siteScores.accessibility} | Best Practices: {siteScores.best} |
            SEO: {siteScores.seo}
          </div>
        ))}
        <h1 className="text-[3rem] md:text-[56px] max-w-[730px] text-center font-bold tracking-[-2px] leading-[3.3rem] lg:leading-17.5 pt-12 pr-2 pl-2">
          Run a Live Test on your Site, from Anywhere.
        </h1>
        <div
          className={`${test ? 'h-[40px] opacity-100 animate-flip-up' : 'h-[0px] opacity-0 mt-[-2rem]'} w-[285px] text-sm text-white m-2 bg-black rounded-md border border-gray-700 p-2 transistion-all duration-300 ease-in-out`}
        >
          <p
            id="output"
            className={test ? 'animate-pulse infinite' : 'text-white'}
          >
            {terminalOutput}
          </p>
        </div>
        <button
          id="test-live-site"
          className="mt-4 px-4 py-2 bg-green-800/80 text-white rounded transition-colors duration-300"
          onClick={async () => {
            startTest(true);
            setTerminalOutput('');
            const el = document.getElementById(
              'test-live-site'
            ) as HTMLButtonElement | null;

            if (el) {
              el.disabled = true;
              el.innerText = 'Testing, please wait...';
            }

            setTerminalOutput('> Testing started...\n');

            const response = await fetch('/api/lighthouse/test', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                url: 'https://www.mymarketingfitness.com',
              }),
            });
            const data = await response.json();

            setTerminalOutput(
              `> Performance: ${data.performanceScore} | Boot Time: ${data.bootT.toFixed(2)} ms`
            );

            setLoadTimes({
              pf: data.performanceScore || 0,
              boot: data.bootT || 0,
              fcp: data.fcp || 0,
              env: data.env || 'Unknown',
            });

            if (el) {
              el.disabled = false;
              el.innerText = 'Testing Complete!';
            }

            setTimeout(() => {
              if (el) {
                el.innerText = 'Test Live Site';
                startTest(false);
              }
            }, 8000);
          }}
        >
          Test Live Site
        </button>
        <p className="text-xs text-gray-500/50">
          *report data can differ greatly - public facing tests use dev tools*
        </p>
        {loadTimes && (
          <div className="mt-2 text-sm text-gray-500 text-center mb-6">
            Performance Score: {(loadTimes.pf * 100).toFixed(0)} | Non-User Boot
            Time: {(loadTimes.boot / 1000).toFixed(2) + 'sec'} | FCP:{' '}
            {(loadTimes.fcp / 1000).toFixed(2) + 'sec'} | Env:{' '}
            {loadTimes.env.slice(0, 18) + '...'}
            <br></br>
          </div>
        )}
      </>
    </div>
  );
}
