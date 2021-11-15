import React, { Component } from 'react';


export default class ErrorBoundary extends Component{
    state = {
        hasError: false,
        error: null,
        errorInfo: null
    }

    componentDidCatch(err, errInfo){
        this.state({errorFlag:true, error: err, errorInfo: errInfo});

    }

    render(){
        if(this.state.errorFlag){
            return <h1>Something went wrong...</h1>
        }else{
            return React.Children.toArray(this.props.children)
        }
    }
}
