import React from 'react';

export class Input extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: this.props.data,
            test: this.props.test
        };
    }
    render() {
        return  (
            <div>
                {
                    this.state.data
                }
                {
                    this.state.test
                }
            </div>
        )
    }
}