import { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
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

  handlerChangeFilter = e =>
    this.setState(prev => {
      return { filter: e.target.value };
    });

  defineList = () => {
    const subStr = this.state.filter.toLowerCase();
    return this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(subStr)
    );
  };

  render() {
    const constVisible = this.defineList();
    return (
      <>
        <h2>Phonebook</h2>
        <form onSubmit={this.handlerSubmit}>
          <label htmlFor="name">Name </label>
          <input
            id="name"
            type="text"
            name="name"
            onChange={this.handlerChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <br />
          <label htmlFor="tel">Number </label>
          <input
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
        </form>

        <h2>Contacts</h2>
        <label htmlFor="filter">Find contacts by name:</label>
        <input
          id="filter"
          type="text"
          name="filter"
          onChange={this.handlerChangeFilter}
        />

        <ul>
          {constVisible.map(({ name, id, number }) => (
            <li key={id}>
              <p>
                {name}: {number}
              </p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
