import React, { Component } from 'react';
import {Register} from './Register/Register';
import {RouteClient} from './RouteClient/RouteClient';
import {NavBar} from './NavBar/NavBar';
import {About} from './About/About';

export class Layout extends Component
{
    static displayName = Layout.name;

    render()
    {
        return (
            <div>
                <NavBar />
                <About />
                <Register />
                <RouteClient />
            </div>
        );
    }
}