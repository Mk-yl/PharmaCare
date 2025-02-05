import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value); // Met à jour l'état de la recherche
    };

    return (
        <div style={styles.searchBarContainer}>
            <form style={styles.form}>
                <input
                    type="text"
                    placeholder="Rechercher un médicament...  "
                    value={searchQuery}
                    onChange={handleSearchChange}
                    style={styles.input}
                />
            </form>
        </div>
    );
};

const styles = {
    searchBarContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',

        borderRadius: '10px',

    },
    form: {
        width: '100%',
        maxWidth: '500px',
        display: 'flex',
    },
    input: {
        flex: 1,
        padding: '10px 90px',
        fontSize: '17px',
        border: 'none',
        borderRadius: '5px',
        outline: 'none',
        marginRight: '10px',
    },
    button: {
        padding: '10px 15px',
        fontSize: '16px',
        backgroundColor: '#00C853',
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
};

export default SearchBar;
