import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../../Header.scss';

const SearchForm = ({ fetchSearchMovies, changeFilter }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      changeFilter('Search');
      fetchSearchMovies(1, searchQuery);
    }
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        aria-label="Search Input"
        placeholder="Search..."
        className={styles.input}
        type="search"
        value={searchQuery}
        onChange={handleChange}
        onBlur={() => setSearchQuery('')}
      />
      <button aria-label="Search Button" type="submit" className={styles.searchBtn} />
    </form>
  );
};

SearchForm.propTypes = {
  fetchSearchMovies: PropTypes.func,
  changeFilter: PropTypes.func,
};

SearchForm.defaultProps = {
  fetchSearchMovies: () => {},
  changeFilter: () => {},
};

export default SearchForm;
