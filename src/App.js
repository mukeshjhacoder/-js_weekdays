import React from 'react';
import './App.css';
import { List, Avatar, Card } from 'antd';
import 'antd/dist/antd.css';
import MainApp from './appContainer';
import { Provider } from 'react-redux';
import store from './store/store'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          key: "value 1"
        },
        {
          key: "value 2"
        },
        {
          key: "value 3",
        }
      ]
    }
  }
  componentDidMount() {

  }
  render(){
    return (
      <div className="App"   >
        <Provider store={store}>
          <MainApp store={store} />
        </Provider>
      </div>
    )
  }
}

export default App;
