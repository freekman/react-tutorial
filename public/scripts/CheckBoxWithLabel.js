import React from 'react';

class CheckBoxWithLabel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isChecked: false};
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.setState({isChecked: !this.state.isChecked})
  }

  render() {
    return (<label>
      <input type="checkbox" checked={this.state.isChecked} onChange={this.onChange}/>
      <p className="result">
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
      </p>

    </label>)
  }
}

export default CheckBoxWithLabel;
