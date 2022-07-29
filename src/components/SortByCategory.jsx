const SortByCategory = ({ setSort_by, setOrder }) => {
    return (
      <section className="sort_by">
        <p className="sort_by_label">Sort articles</p>
        <select
          name="sort_by"
          id=""
          className="sort_by_sort_by"
          onChange={(e) => {
            setSort_by(e.target.value);
          }}
        >
          <option value="author">Author</option>
          <option value="title">Title</option>
          <option value="votes">Votes</option>
          <option value="created_at">Date posted</option>
        </select>
  
        <select
          name="order"
          id=""
          className="sort_by_order"
          onChange={(e) => {
            setOrder(e.target.value);
          }}
        >
          <option value="b-a">Descending</option>
          <option value="a-b">Ascending</option>

        </select>
      </section>
    );
  };
  
  export default SortByCategory;

  