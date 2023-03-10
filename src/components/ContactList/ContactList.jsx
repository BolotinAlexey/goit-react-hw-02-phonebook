import ContactItem from 'components/ContactItem/ContactItem';

function ContactList({ filter, contacts }) {
  const defineList = () => {
    const subStr = filter.toLowerCase();
    return contacts.filter(({ name }) => name.toLowerCase().includes(subStr));
  };

  return (
    <ul>
      {defineList().map(({ name, id, number }) => (
        <ContactItem key={id} number={number} name={name} />
      ))}
    </ul>
  );
}

export default ContactList;
