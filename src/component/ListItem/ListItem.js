import React    from "react";

class ListItem extends React.Component {
  render() {
    return (
    	<li className="listItem" 
    		tabIndex = "0"
    		id={this.props.name}
    		aria-label = {this.props.name}
    		onClick={() => this.props.handleListItemClick(this.props)} 
    	>
    		<img src={this.props.categories[0].icon.prefix+"32"+this.props.categories[0].icon.suffix} alt={this.props.categories[0].name}/>
    		{this.props.name}
    	</li>);
  }
}

export default ListItem;
