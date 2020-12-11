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
      logErrorToMyService(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        return (
            <h1>Something went wrong, please try again or contact the administrator.</h1>
        )
      }
  
      return this.props.children; 
    }
  }
