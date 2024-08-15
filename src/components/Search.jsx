import { useState } from 'react';
import PropTypes from 'prop-types';

function Search(props) {
  const [search, setSearch] = useState('');

  const onSearchChange = () => {
    props.onSearchChange(search);
  };

  const searchKeydown = (e) => {
    if (e.key === 'Enter') {
      onSearchChange();
    }
  };

  return (
    <>
      <div>
        Cari Article :{' '}
        <input
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={searchKeydown}
        ></input>
        <button onClick={onSearchChange}>Cari</button>
      </div>
      <small>
        Ditemukan {props.totalPosts} data dengan pencarian kata {search}
      </small>
    </>
  );
}

Search.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  totalPosts: PropTypes.number.isRequired,
};

export default Search;
