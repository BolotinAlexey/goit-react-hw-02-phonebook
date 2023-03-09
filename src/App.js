import { Component } from 'react';
import { nanoid } from 'nanoid';
// import Form from './Comoponents/Form/Form';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handlerChange = e => this.setState({ name: e.target.value });

  handlerClick = () =>
    this.setState(({ contacts, name }) => {
      contacts.push({ id: nanoid(), name });
    });

  render() {
    const { contacts } = this.state;
    return (
      <>
        <h2>Phonebook</h2>
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
        <button onClick={this.handlerClick}>Add contact</button>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(({ name, id }) => (
            <li key={id}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
