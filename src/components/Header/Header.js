import React from 'react';
import './Header.css';

class Header extends React.Component{
    render() {
        const {handleChangeActivePage} = this.props;
        return (
            <ul className='nav-bar'>
                <li onClick={() => handleChangeActivePage('MemoNPure')}>Memo-N-PureComnent</li>
                <li onClick={() => handleChangeActivePage('Practice')}>Immutable Practice</li>
            </ul>
        );
    }
}

export default Header;