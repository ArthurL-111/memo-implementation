import React from 'react'
import CarWithMemo from './CarWithMemo';
import CarWithPure from './CarWithPure';
import SellButton from './SellButton';

class CarsApp extends React.Component {
    state = {
        cars: [
          {
            make: "Toyota",
            quantity: 10,
            id: 1
          },
          {
            make: "Honda",
            quantity: 5,
            id: 2,
          },
          {
            make: "Nissan",
            quantity: 7,
            id: 3,
          },
        ],
      };

    handleSell = (index) => {
        this.setState((prev) => {
            const newCars = prev.cars.map((car, idx) => {
                if (idx === index) {
                    return { ...car, quantity: car.quantity - 1}
                } else {
                    return car;
                }
            })
            const nextState = {...prev, cars: newCars};
            
            return nextState;
        })
    }

    render() {
        return(
            <React.Fragment>
                <div className='cars-wrapper'>
                    <h4>Implemented myMemo</h4>
                    {this.state.cars.map((car) => (
                        <CarWithMemo
                            key={car.id}
                            make={car.make}
                            quantity={car.quantity}
                        />
                    ))}
                </div>

                <div className='cars-wrapper'>
                    <h4>Implemented myPureComponent</h4>
                    {this.state.cars.map((car) => (
                        <CarWithPure
                            key={car.id}
                            make={car.make}
                            quantity={car.quantity}
                        />
                    ))}
                </div>

                <div>
                    {this.state.cars.map((car, index) => (
                        <SellButton 
                            key={car.id}
                            make={car.make}
                            handleSell={() => this.handleSell(index)}
                        />
                    ))}
                </div>
                
            </React.Fragment>
        );
    }
}

export default CarsApp;