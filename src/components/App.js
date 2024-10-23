// ./src/components/App.js
import React from 'react';
import connect from "react-redux";

import Counter from "../containers/CounterContainer";

class App extends React.Component {
    render() {
        return <Counter />
    }
}

export default App;