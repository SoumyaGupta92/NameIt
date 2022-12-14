import React from "react";
import Header from "../Header/Header";
import ResultsContainer from "../ResultsContainer/ResultsContainer";
import SearchBox from "../SearchBox/SearchBox";
import './App.css'

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {

    state = {
        headerText: "Name it!",
        headerExpanded: true,
        suggestedName: [],
    };

    handleInputChange = (inputText) => {
        this.setState({
            headerExpanded: !inputText,
            suggestedName: inputText ? name(inputText) : []
        });
    };

    render() {
        return (
            <div>
                <Header headerExpanded={this.state.headerExpanded} headTitle={this.state.headerText} />
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedName} />
            </div>
        )
    };
};

export default App;