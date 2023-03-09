import { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handlerChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handlerSubmit = e => {
    e.preventDefault();
    this.setState(prev => {
      let { name, number } = this.state;
      e.target.reset();
      return {
        contacts: [{ id: nanoid(), name, number }, ...prev.contacts],
      };
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <h2>Phonebook</h2>
        <form onSubmit={this.handlerSubmit}>
          <label htmlFor="name">
            Name
            <input
              id="name"
              type="text"
              name="name"
              onChange={this.handlerChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>

          <label htmlFor="tel">
            Number
            <input
              id="tel"
              type="tel"
              name="number"
              onChange={this.handlerChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>

        <h2>Contacts</h2>
        <ul>
          {contacts.map(({ name, id, number }) => (
            <li key={id}>
              <p>
                {name} {number}
              </p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
