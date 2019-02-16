import React from "react";

class TitleLine extends React.Component {
	render() {
		const line_style = {
			borderColor: '#2EB738',
		}
		return(
			<div className="row align-items-center">
				<div className="col-auto">
					<i class="fas fa-times"></i>
				</div>
				<div className="col">
					<hr style={line_style}></hr>
				</div>
				<div className="col-auto">
					<i class="fas fa-times"></i>
				</div>
			</div>
		)
	}
}

class HeaderTitle extends React.Component {
	render() {
		return(
			<div className="text-center text-success">
				<TitleLine/>
				<div className="header_title">
					<div className="ch">{this.props.title}</div>
					<div className="en">MULTIPLICATION CHART</div>
				</div>
				<TitleLine/>
			</div>
		)
	}
}

export default HeaderTitle;