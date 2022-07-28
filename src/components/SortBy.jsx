const SortBy = () => {



    return ( 


        <section className="sort_by">
        <p className="sort_by_label">Sort articles</p> 
        <select name="sort_by" id="" className="sort_by_dropdown"
        onChange={(e)=> 
        {console.log(e.target.value)}}>
            <option value ="?sort_by=author&order=asc">Author</option>
            <option value ="?sort_by=title&order=asc">Title A-Z</option>
            <option value ="?sort_by=title&order=desc">Title Z-A</option>
            <option value ="?sort_by=votes&order=asc">Votes ascending</option>
            <option value ="?sort_by=votes&order=desc">Votes descending</option>
            <option value ="?sort_by=created_at&order=asc">Date newest first</option>
            <option value ="?sort_by=crated_at&order=desc">Date oldest first</option>
        </select>

        </section>


     );
}
 
export default SortBy;