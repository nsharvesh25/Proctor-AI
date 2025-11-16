import React from 'react';

const ArticleCard: React.FC<{title: string, summary: string, source: string, date: string}> = ({title, summary, source, date}) => (
    <div className="bg-proctor-dark-3 p-4 rounded-lg hover:bg-proctor-dark-2 transition-colors cursor-pointer">
        <h3 className="font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-400 mt-2">{summary}</p>
        <div className="text-xs text-gray-500 mt-3">
            <span>{source}</span> &bull; <span>{date}</span>
        </div>
    </div>
);

const NewspaperPage: React.FC = () => {
  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-6">Daily Newspapers</h1>
      <div className="bg-proctor-dark p-6 rounded-lg">
        <p className="text-gray-400 mb-6">
          Stay updated with the latest news and editorials relevant to your exam preparation.
        </p>
        <div className="space-y-4">
            <ArticleCard 
                title="ISRO's latest launch and its implications for space tech"
                summary="The successful launch of the new satellite series is a major milestone for India's space program, opening up new possibilities in communication and earth observation."
                source="The Hindu"
                date="Today"
            />
            <ArticleCard 
                title="RBI's Monetary Policy: A Deep Dive into the Repo Rate"
                summary="The central bank's decision to maintain the status quo on the repo rate has been met with mixed reactions from economists and market analysts."
                source="The Indian Express"
                date="Today"
            />
             <ArticleCard 
                title="Understanding the new amendments to the Environmental Protection Act"
                summary="A critical analysis of the recent changes and their potential impact on industrial regulations and conservation efforts."
                source="Livemint"
                date="Yesterday"
            />
        </div>
      </div>
    </div>
  );
};

export default NewspaperPage;
