import React from 'react';
import Header from '../Header/Header';

class Layout extends React.Component {
    render() {
        return (
            <>
                <header>
                    <Header handleChangeActivePage={this.props.handleChangeActivePage}/>
                </header>
                <main>
                    {this.props.children}
                </main>
            </>
        );
    }
}

export default Layout;