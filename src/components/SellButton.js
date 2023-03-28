import React from 'react'

class SellButton extends React.Component {

    render() {
        const{ make } = this.props;
        return(
            <button type="" className='sell-btn' onClick={this.props.handleSell}>sell {make}</button>
        );
    }
}

export default SellButton;