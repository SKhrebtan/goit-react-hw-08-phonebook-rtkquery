import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Form.module.css'
import { nanoid } from 'nanoid';

class Form extends Component {
    state = {
    name: '',
    number: '',
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
          this.reset();
    }
    
    reset = () => {
        this.setState({ name: '', number: ''})
    }
    
    render() {
const { name, number} = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
      <label htmlFor={this.nameFormId} className={css.label}>
        Name
      <input
      type="text"
       name="name"
      value={name}
     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className={css.input}
        id={this.nameFormId}
        onChange={this.handleInput}
/>
      </label>
      <label htmlFor={this.numberFormId} className={css.label}>
        Number
        <input
        type="tel"
         name="number"
         value={number}
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            className={css.input}
              id={this.numberFormId}
          onChange={this.handleInput}
/>
      </label>
        <button type="submit" className={css.btn}>Add contact</button>
               </form>)
    }
}

Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number
}

export default Form;