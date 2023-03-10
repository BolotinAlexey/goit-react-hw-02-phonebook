function ContactItem({ deleteRec, name, number }) {
  return (
    <li>
      <p>
        {name}: {number}
        <button onClick={() => deleteRec(name)}>Delete</button>
      </p>
    </li>
  );
}

export default ContactItem;
