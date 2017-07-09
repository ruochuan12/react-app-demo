import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import ReactPullToRefresh from 'react-pull-to-refresh';
import './genericons/genericons.css';
import './app.css';
console.log(`react-pull-to-refresh`, ReactPullToRefresh);

let count = 1;
export default class PullToRefresh extends Component{

  constructor() {
    super();
    this.state =  {
      items: [
        <div key={'item-' + count}>Item {count++}</div>
      ]
        // items: [1,2,3]
    };
    console.log(`17---this.state`,this.state);
  }

  handleRefresh(resolve, reject) {
    let self = this;
    console.log(this);
    setTimeout(function () {
      self.addItem() ? resolve() : reject();
    }, 500);
  }

  addItem() {
    this.state.items.push(<div key={'item-' + count}>Item {count++}</div>);
    this.setState({
      items: this.state.items
    });
    return true;
  }

  render() {
    return (
        <div>
            <ReactPullToRefresh onRefresh={(s,v) => {this.handleRefresh(s,v)}} style={{
                textAlign: 'center'
            }}>
                <h3>Pull down to refresh</h3>
                <div>
                {this.state.items}
                </div>
            </ReactPullToRefresh>
      </div>
    );
  }
};

// ReactDOM.render(<App/>, document.getElementById('container'));