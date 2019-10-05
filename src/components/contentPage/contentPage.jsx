import React, { Component } from "react";
import CardList from "../cards/cardList";
import Navbar from "../navbar/navbar";

class ContentPage extends Component {
    handleOnCardClick = url => {
    var win = window.open(url, '_blank');
    win.focus();
  };

  render() {
    return (
      <div className="p-0 w-100 shadow">
        <Navbar />
        <div className="p-5 text-light w-75 mx-auto text-center">
          {this.props.content}
        </div>
        <CardList
          onClick={this.handleOnCardClick}
          cards={this.props.projects}
          title="Projects"
        />
        <CardList
          onClick={this.handleOnCardClick}
          cards={this.props.tech}
          title="Tech"
        />
      </div>
    );
  }
}

export default ContentPage;
