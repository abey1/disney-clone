import { notFound } from 'next/navigation';
import React from 'react'
type Props = {
    params:{
        term: string;
    };
};
function SearchPage({params:{term}}:Props) {
    if(!term) notFound();
    const termToUse = decodeURI(term)
    //Api call to get searched movie
    //Api call to get the popular movies
  return (
    <div>
      <div>Welcome to the search page: {termToUse}</div>
    </div>
  )
}

export default SearchPage
