import React, { Component } from 'react';

class Error extends Component {
    state ={
        hasError:false
    }
    static getDerivedStateFromError(err){
        return {hasError:true}
    }
    // componentDidCatch(error,info){
    //     console.log(error);
    //     console.log(info);

    // }
    render() {
        if(this.state.hasError){
            return <h1>Not Found</h1>
        }
        return this.props.children;
    }
}

export default Error;