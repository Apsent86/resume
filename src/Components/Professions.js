import React, {Component} from 'react';

class Professions extends Component {


    constructor(props, context) {

        super(props, context);

        this.state={
            data:this.props.data,
        }
    }

    render() {
        return (
            <ul className="list">

                {this.state.data.map(i => {

                    return <li key={i}>{i}</li>
                })}

            </ul>

        );
    }
}

export default Professions;