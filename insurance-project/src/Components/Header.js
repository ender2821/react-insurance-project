import React from 'react';
import logo from '../britecore-logo.png';

class Header extends React.Component{
    
    render(){
        return (
            <header>
                <div className='logo'>
                    <img src={logo} alt="britecore" />
                </div>
                <ul className='nav'>
                    <li><i class="fas fa-umbrella"></i>Policies</li>
                    <li><i class="fas fa-bolt"></i>Claims</li>
                    <li><i class="fas fa-user"></i>Contact</li>
                    <li><i class="fas fa-chart-bar"></i>Data</li>
                    <li className='active'><i class="fas fa-book"></i>Lines</li>
                    <li><i class="fas fa-th"></i>All Modules</li>
                </ul>
                <p className='page-title'>Comercial Property - Add Field</p>
            </header>
        );
    }
}

export default Header;