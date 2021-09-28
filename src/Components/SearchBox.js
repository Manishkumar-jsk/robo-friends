const SearchBox = ({searchchanges}) => {
    return ( 
        <div className="pa2">
            <input 
            className="pa3 ba b--green bg-lightest-blue"
            type="search" 
            placeholder="Search robots"
            onChange={searchchanges} />
        </div>
     );
}
 
export default SearchBox;