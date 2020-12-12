import React, { Component } from 'react'

export default class Error extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
        console.log(error);
        console.log(errorInfo);
    //   logErrorToMyService(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        return (
            <div className="fade modal-backdrop show d-flex justify-content-center align-items-center">
                <h1>Something went wrong, please try again or contact the administrator.</h1>
            </div> 
        )
      }
  
      return this.props.children; 
    }
  }
