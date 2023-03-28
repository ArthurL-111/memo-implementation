import React from 'react'
import './CarsApp.css';
import { memo } from 'react';

class Car extends React.Component {

    componentDidUpdate(){
        console.log(this.props.make, 'updating...')
    }
    
    render() {
        const { make, quantity } = this.props;
        return(
            <div className='car'>
                <p>{make}</p>
                <p>{quantity}</p>
            </div>
        );
    }
}

export default Car;