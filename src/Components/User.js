import React, { Component } from 'react';
import Professions from "./Professions";

class User extends Component {

    constructor(props, context) {

        super(props, context);

        this.state={
            firstName:'FirstName',
            lastName:'LastName',
            professions:[
                'tester',
                'finder'
            ]
        }
    }

    render() {
        return (
            <div className="col">
                <h1>{this.state.firstName+" "+this.state.lastName}</h1>
                <Professions data={this.state.professions} />
            </div>
        );
    }
}

export default User;