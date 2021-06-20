import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


// function based
// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err) => console.log(err)
//     );
//     return <div>Hi there!</div>

// };


// Class based
class App extends React.Component{

    // intiallize a state wth constructor method
    constructor(props){
        super(props);

        // THIS IS THE ONLY TIME we do direct assignment
        this.state = {latitude: null, errorMessage: ''}; 


            // Placed in => componentDidMount()
        // window.navigator.geolocation.getCurrentPosition(
        //     //position => console.log(position),
        //     position => {
        //         // We call setState to set the postion 
        //         this.setState({latitude: position.coords.latitude});

        //         // we never do direct assigned, the only exception is that we only do in the constaructor to intialize 
        //         //this.state.latitude = position.coords.latitude;
        //     },
        //     // err => console.log(err)
        //     err => {
        //         this.setState({ errorMessage: err.message});
        //     }
        // );
    }

    componentDidMount(){
        console.log('My compenent was rendered to the screen');
        window.navigator.geolocation.getCurrentPosition(
            //position => console.log(position),
            position => this.setState({latitude: position.coords.latitude}),
            // err => console.log(err)
            err => this.setState({ errorMessage: err.message})
        );
    }

    componentDidUpdate(){
        console.log('My component was just updated - It rerendered!')
    }

    renderContent(){
        // conditional rendering 
        if (this.state.errorMessage && !this.state.latitude) {
            return <div> Error : {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.latitude) {
            return <SeasonDisplay lat={this.state.latitude} />
        }

        return <Spinner message="Please accept location request" />
        
    };

    // React says we have to define render method 
    render(){

         return (
             <div className="border red">{this.renderContent()}</div>
            // <div>
            //     Latitude: {this.state.latitude}
            //     <br />
            //     Error: {this.state.errorMessage}
            // </div>
         );

    }
}

ReactDOM.render(<App />, document.querySelector('#root'));