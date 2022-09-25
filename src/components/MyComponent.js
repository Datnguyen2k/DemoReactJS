import React from 'react';


class MyComponent extends React.Component{
    state={
        name :"dat",
        year :"2000"
    };
    render(){
        return(
            <div>
                My first componentP{this.state.name}
            </div>
        )
    }
}
export default MyComponent;