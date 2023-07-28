import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class Form extends Component {
    state = {
     name: '',
  number: ''
}
    nameFormId = nanoid();
    numberFormId = nanoid();

     handleInput = event => {
    const { name, value } = event.currentTarget;
    this.setState({[name]: value,})
    }

      handleSubmit = event => {
    event.preventDefault();
          this.props.onSubmit(this.state);
          this.reser();
    }
    
    reser = () => {
        this.setState({   name: '',
  number: ''})
    }
    
    render() {
const { name, number } = this.state;
    return (
       <form onSubmit={this.handleSubmit}>
      <label htmlFor={this.nameFormId}>
        Name
    <input
  type="text"
          name="name"
          value={name}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    id={this.nameFormId}
          onChange={this.handleInput}
/>
      </label>
      <label htmlFor={this.numberFormId}>
        Number
        <input
  type="tel"
          name="number"
          value={number}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    id={this.numberFormId}
          onChange={this.handleInput}
/>
      </label>
      <button type="submit">Add contact</button>
        </form>)
    }
}

export default Form;