import React from "react";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  Configure,
  Pagination,
} from "react-instantsearch-dom";

// Replace these with your actual Algolia credentials
const searchClient = algoliasearch(
  "MHHSM58XFI", // e.g. 'latency'
  "367e7cedf562cbf8d0ad6a91fed029fc" // e.g. 'f3f7...'
);

type HitType = {
  title: string;
  objectID: string;
};

const Hit = ({ hit }: { hit: HitType }) => (
  <article>
    <h2>
      <Highlight attribute="title" hit={hit} />
    </h2>
    <p>
      <Highlight attribute="objectID" hit={hit} />
    </p>
  </article>
);

const Search = () => (
  <InstantSearch indexName="movies_index" searchClient={searchClient}>
    <Configure hitsPerPage={8} />
    <SearchBox />
    <Hits hitComponent={Hit} />
    <div className="pagination">
      <Pagination />
    </div>
  </InstantSearch>
);

export default Search;
