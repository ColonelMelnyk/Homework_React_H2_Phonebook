import PropTypes from 'prop-types';

export const ListFilter = ({ filter, onFilterChange }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
       value={filter}
       onChange={onFilterChange}
        type="text"
      />
    </>
  );
};

ListFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};