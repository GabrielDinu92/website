import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
import { useRouter } from "next/router";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch);

const SearchInput = () => {
  const searchPageRoute = '/';
  const router = useRouter();

  const [searchValue, setSearchValue] = useState<string>(
    (router.query.s as string) || ""
  );

  useEffect(() => {
    const search = Array.isArray(router.query.s) ? router.query.s[0] : router.query.s;  
    setSearchValue(search || "");
  }, [router.query.s]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const executeSearch = () => {
    if (searchValue.trim()) {
      router.push({
        pathname: searchPageRoute,
        query: { ...router.query, s: searchValue }
      });
    } else {
      const { s, ...restQuery } = router.query;
      router.push({
        pathname: searchPageRoute,
        query: restQuery
      });
    }
  };

  const initSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      executeSearch();
    }
  };

  return (
    <div className="search flex justify-end items-center">
      <input
        onChange={handleSearch}
        onKeyDown={initSearch}
        type="text"
        placeholder="Search the site ..."
        value={searchValue}
        className="search-field uppercase"
      />
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
    </div>
  );
};

export default SearchInput;