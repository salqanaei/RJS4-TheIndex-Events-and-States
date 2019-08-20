import React from "react";

// Components
import AuthorCard from "./AuthorCard";
import SearchBar from "./SearchBar";

function AuthorsList(props) {
  const authorCards = props.filteredAuthors.map(author => (
    <AuthorCard
      key={author.first_name + author.last_name}
      author={author}
      authory={props.authory}
    />
  ));

  return (
    <div className="authors">
      <SearchBar filterAuthors={props.filterAuthors} />
      <h3>Authors</h3>
      <div className="row">{authorCards}</div>
    </div>
  );
}

export default AuthorsList;
