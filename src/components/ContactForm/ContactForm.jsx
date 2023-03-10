import { Component } from 'react';
import { Form } from './ContactForm.styled';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handlerSubmit = e => {
    e.preventDefault();
    const { onForm } = this.props;
    let { name, number } = this.state;
    onForm({ name, number });
    e.target.reset();
    this.setState({ name: '', number: '' });
  };

  handlerChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={e => this.handlerSubmit(e)}>
        <label htmlFor="name">Name </label>
        <input
          value={name}
          id="name"
          type="text"
          name="name"
          onChange={this.handlerChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label htmlFor="tel">Number </label>
        <input
          value={number}
          id="tel"
          type="tel"
          name="number"
          onChange={this.handlerChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <br />
        <button type="submit">Add contact</button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onForm: PropTypes.func.isRequired,
};

export default ContactForm;
