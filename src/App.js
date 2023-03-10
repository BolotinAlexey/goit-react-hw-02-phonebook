import { Component } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  existRow = existName => alert(`Record ${existName} already exists`);

  handleForm = row => {
    if (this.state.contacts.find(({ name }) => name === row.name)) {
      this.existRow(row.name);
      return;
    }
    this.setState(prev => {
      return {
        contacts: [row, ...prev.contacts],
      };
    });
  };

  handlerChangeFilter = e => this.setState({ filter: e.target.value });

  render() {
    const { filter, contacts } = this.state;
    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactForm onForm={this.handleForm} />

          <h2>Contacts</h2>
          <Filter
            value={filter}
            handlerChangeFilter={this.handlerChangeFilter}
          />
          <ContactList filter={filter} contacts={contacts} />
        </div>
      </>
    );
  }
}

export default App;
