function Filter({ handlerChangeFilter, value }) {
  return (
    <>
      <label htmlFor="filter">Find contacts by name:</label>
      <input
        id="filter"
        type="text"
        name="filter"
        onChange={handlerChangeFilter}
        value={value}
      />
    </>
  );
}

export default Filter;
