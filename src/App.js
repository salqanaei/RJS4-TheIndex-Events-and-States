import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";
import SearchBar from "./SearchBar";

class App extends Component {
  state = {
    currentAuthor: null,
    authors: authors,
    filteredAuthors: authors
  };

  selectAuthor = author => {
    this.setState({ currentAuthor: author });
  };

  unselectAuthor = () => {
    this.setState({ currentAuthor: null });
  };

  filterAuthors = query => {
    const filteredAuthors = this.state.authors.filter(author => {
      const name = author.first_name + " " + author.last_name;
      return name.toLowerCase().includes(query);
    });
    this.setState({ filteredAuthors: filteredAuthors });
    console.log("filtered authors", filteredAuthors);
  };

  shown = () => {
    if (this.state.currentAuthor) {
      return <AuthorDetail author={this.state.currentAuthor} />;
    }
    return (
      <AuthorsList
        authors={authors}
        authory={this.selectAuthor}
        filteredAuthors={this.state.filteredAuthors}
        filterAuthors={this.filterAuthors}
      />
    );
  };

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar unselect={this.unselectAuthor} />
          </div>
          <div className="content col-10">{this.shown()}</div>
        </div>
      </div>
    );
  }
}

export default App;
