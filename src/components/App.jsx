import React, {Component} from 'react';
import Form from './Form/Form'
class App extends Component {

  state = {
  contacts: [],
   }
  
  formSubmitHandler = data => {
    console.log(data)
  }
  render() {
    return (
       <div>
        <Form onSubmit={this.formSubmitHandler} />
    </div>
    )
       
               }
};

export default App;
