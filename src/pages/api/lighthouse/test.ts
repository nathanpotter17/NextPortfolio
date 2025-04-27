import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'Invalid URL provided' });
  }

  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });

  if (!chrome || !chrome.port) {
    return res.status(500).json({ error: 'Failed to launch Chrome' });
  }

  try {
    const runnerResult = await lighthouse(url, {
      logLevel: 'info',
      output: 'json',
      onlyCategories: ['performance'],
      port: chrome.port,
    });

    return res.status(200).json({
      performanceScore: runnerResult!.lhr.categories.performance.score,
      fullReport: runnerResult!.report,
      result: runnerResult!.lhr,
      env: runnerResult!.lhr.environment.networkUserAgent,
      bootT: runnerResult!.lhr.audits['bootup-time'].numericValue,
      fcp: runnerResult!.lhr.audits['first-contentful-paint'].numericValue,
    });
  } catch (error) {
    chrome.kill();
    return res
      .status(500)
      .json({ error: 'Error processing Lighthouse report' });
  }
}
