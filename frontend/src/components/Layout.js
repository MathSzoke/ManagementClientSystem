import React, { Component } from 'react';
import Register from './register/Register';

export class Layout extends Component
{
    static displayName = Layout.name;

    render()
    {
        return (
            <div>
                <Register />
            </div>
        );
    }
}