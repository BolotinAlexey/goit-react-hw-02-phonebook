function ContactList({ filter, contacts }) {
  const defineList = () => {
    const subStr = filter.toLowerCase();
    return contacts.filter(({ name }) => name.toLowerCase().includes(subStr));
  };
  const constVisible = defineList();
  return (
    <ul>
      {constVisible.map(({ name, id, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
