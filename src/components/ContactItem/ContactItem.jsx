function ContactItem({ id, name, number }) {
  return (
    <li key={id}>
      <p>
        {name}: {number}
      </p>
    </li>
  );
}

export default ContactItem;
