

const Search = ({ fnSearch }) => {
    return (<>

        <h3>Search</h3>

        <input
            type="text"
            placeholder="busque aqui...."
            onChange={(e) => fnSearch(e.target.value)}

        />
    </>
    )
}

export default Search