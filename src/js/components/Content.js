import React from "react";
import ReactDOM from "react-dom";

import NumBlock from "./container/NumBlock"
import HeaderTitle from "./container/HeaderTitle"

class Content extends React.Component {
	constructor() {
	  super();
	  this.state = {
	  	title: "九九乘法表",
	  	number:[1,2,3,4,5,6,7,8,9]
	  }
	}
	render() {
	  return (
	  	<div className="bg-light">
				<div className="row bg-light p-4 wrapper align-items-center">
					<div className="col-4">
						<HeaderTitle title={this.state.title} />
					</div>
					{this.state.number.map((num, i) =>
				    <NumBlock num={num} data={this.state.number} key={i} />
				  )}
				</div>
			</div>
	  );
	}
}

export default Content;
ReactDOM.render(<Content/>, document.getElementById('root'));