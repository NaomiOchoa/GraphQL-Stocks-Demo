import * as React from "react";
import ExpandedStock from "./ExpandedStock";

export default class Stock extends React.Component {
  constructor(props) {
    super();
    this.state = {
      expanded: false,
    };
  }

  render() {
    return this.state.expanded ? (
      <ExpandedStock stock={this.props} />
    ) : (
      <div className="stock">
        <div>
          <h2 className="stock-name">{this.props.stock.shortName}</h2>
          <div className="stock-ticker">Ticker: {this.props.stock._id}</div>
        </div>
        <div className="expand-arrow">+</div>
      </div>
    );
  }
}