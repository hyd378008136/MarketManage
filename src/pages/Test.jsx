import React, {Component} from 'react';
import {connect} from 'react-redux'

class Test extends Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }

  render () {
    const {demo} = this.props;

    console.log(demo);
    return (
      <div>
        <div>test!</div>
        <div>redux: {demo.value_0.value}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    demo: state.DemoReducer
  };
};

export default connect(mapStateToProps)(Test);
