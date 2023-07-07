import React, { useState, useEffect } from "react";

interface Found {
  title: string;
}

const SearchResult = ({ searchQuery }: { searchQuery: string }) => {
  const [results, setResults] = useState<Found[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    handleSearch(searchQuery);
  }, [searchQuery]);

  const handleSearch = (searchData: string) => {
    fetch(`https://hn.algolia.com/api/v1/search?query=${searchData}`)
      .then((res) => res.json())
      .then(({ hits }) => {
        if (searchData?.length > 0) {
          const filteredData = hits.filter(
            (item: Found) =>
              item?.title?.toLowerCase().includes(searchData.toLowerCase())
          ) as Found[];

          setResults(filteredData);
        } else {
          setResults([]);
        }

        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {results.length > 0 ? (
            results.map((result: Found, i: number) => (
              <div key={i}>
                <h5 className="text-black">{result.title}</h5>
              </div>
            ))
          ) : (
            <div>No search results found.</div>
          )}
        </>
      )}
    </div>
  );
};

export default SearchResult;