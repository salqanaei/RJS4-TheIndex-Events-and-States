import React, { Component } from "react";

class AuthorDetail extends Component {
  render() {
    const author = this.props.author;
    const authorName = `${author.first_name} ${author.last_name}`;
    return (
      <div className="author col-xs-10">
        <div>
          <h3>{authorName}</h3>
          <img
            src={author.imageUrl}
            className="img-thumbnail"
            alt={author.first_name}
          />
        </div>
        <table className="mt-3 table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Authors</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{author.books[0].title}</td>
              <td>I SHOULD BE A STRING OF THIS BOOK'S AUTHORS</td>
              <td>
                <button className="btn" style={{ backgroundColor: "blue" }} />
              </td>
            </tr>
            <tr>
              <td>{author.books[1].title}</td>
              <td>I SHOULD BE A STRING OF THIS OTHER BOOK'S AUTHORS</td>
              <td>
                <button className="btn" style={{ backgroundColor: "red" }} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default AuthorDetail;
