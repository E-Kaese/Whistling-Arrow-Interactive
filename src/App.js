import React, { Component } from "react";
import "./App.css";
import Banner from "./components/banner/banner";
import CustomFooter from "./components/footer/footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router"
import ContentPage from "./components/contentPage/contentPage";

class App extends Component {
  cards = [
    {
      title: "Test 1",
      imageUrl: "https://via.placeholder.com/500",
      url: "test1url"
    },
    {
      title: "Test 2",
      imageUrl: "https://via.placeholder.com/500",
      url: "test2url"
    },
    {
      title: "Test 3",
      imageUrl: "https://via.placeholder.com/500",
      url: "test3url"
    },
    {
      title: "Test 4",
      imageUrl: "https://via.placeholder.com/500",
      url: "test4url"
    },
    {
      title: "Test 5",
      imageUrl: "https://via.placeholder.com/500",
      url: "test5url"
    },
    {
      title: "Test 1",
      imageUrl: "https://via.placeholder.com/500",
      url: "test1url"
    },
    {
      title: "Test 2",
      imageUrl: "https://via.placeholder.com/500",
      url: "test2url"
    },
    {
      title: "Test 3",
      imageUrl: "https://via.placeholder.com/500",
      url: "test3url"
    },
    {
      title: "Test 4",
      imageUrl: "https://via.placeholder.com/500",
      url: "test4url"
    },
    {
      title: "Test 5",
      imageUrl: "https://via.placeholder.com/500",
      url: "test5url"
    }
  ];

  appProps = {
    name: 'Apps',
    content: 'Test Test Test Test Test Test Test Test Test Test Test',
    projects: this.cards,
    tech: this.cards
  }

  webProps = {
    name: 'Websites',
    content: 'Test Test Test Test Test Test Test Test Test Test Test',
    projects: this.cards,
    tech: this.cards
  }

  gameProps = {
    name: 'Games',
    content: 'Test Test Test Test Test Test Test Test Test Test Test',
    projects: this.cards,
    tech: this.cards
  }

  render() {
    return (
      <BrowserRouter>
        <Banner />
        <Switch>
          <Route path={`/${this.appProps.name.toLowerCase()}`} component={() => <ContentPage {...this.appProps} />} />
          <Route path={`/${this.webProps.name.toLowerCase()}`} component={() => <ContentPage {...this.webProps} />} />
          <Route path={`/${this.gameProps.name.toLowerCase()}`} component={() => <ContentPage {...this.gameProps} />} />
          <Route>
            <Redirect to="/websites" />
          </Route>
        </Switch>
        <CustomFooter />
      </BrowserRouter>
    );
  }
}

export default App;
