import SiteScores from '../../components/ui/site-scores';

export default function About() {
  return (
    <div className="flex flex-col bg-white text-black min-h-screen">
      <div className="flex flex-col items-center">
        <h1 className="text-[3rem] md:text-[56px] max-w-[730px] text-center font-bold tracking-[-2px] leading-[3.3rem] lg:leading-17.5 pt-12 pr-2 pl-2">
          Existing Site Scores
        </h1>
        <SiteScores />
      </div>
    </div>
  );
}
