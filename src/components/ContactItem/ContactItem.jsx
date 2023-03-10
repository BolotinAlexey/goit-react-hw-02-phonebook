function ContactItem({ id, name, number }) {
  return (
    <li>
      <p>
        {name}: {number}
      </p>
    </li>
  );
}

export default ContactItem;
