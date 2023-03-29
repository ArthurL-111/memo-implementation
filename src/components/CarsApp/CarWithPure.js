import React from 'react'
import './CarsApp.css';
import myPureComponent from '../../shared/myPureComponent';

class CarWithPure extends myPureComponent {

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

export default CarWithPure;