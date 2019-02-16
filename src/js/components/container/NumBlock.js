import React from "react";

class NumTitle extends React.Component {
	render() {
		return(
			<div className="block_title">{this.props.title}</div>
		)
	}
}

class NumCalc extends React.Component {
	render() {
		return(
			<div className="block_txt">{this.props.num} X {this.props.num_2} = {this.props.num*this.props.num_2}</div>
		)
	}
}

class NumBlock extends React.Component {
	render() {
		const num_col_2_style = {
			paddingTop: '30px'
		};

		if(this.props.num == 1){
			return null;
		}
		else{
			let col_1 = [], col_2 = [];
			for(let i = 1; i < this.props.data.length+1; i++){
				if(i < 4){
					col_1.push(<NumCalc num={this.props.num} num_2={i} />)
				}
				else{
					col_2.push(<NumCalc num={this.props.num} num_2={i} />)
				}
			}
		  return (
				<div className="col-4 text-success text-center num_block">
					<div className="row no-gutters bg-white">
						<div className="col-6">
							<NumTitle title={this.props.num} />
							{col_1}
						</div>
						<div className="col-6" style={num_col_2_style}>
							{col_2}
						</div>
					</div>
				</div>
		  );
		}
	}
}

export default NumBlock;