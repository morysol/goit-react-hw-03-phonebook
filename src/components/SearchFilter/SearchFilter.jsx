import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';

import { SearchBox, Filter } from './SearchFilter.styled';

class SearchFilter extends Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
  };
  idInputSearch = nanoid();
  render() {
    return (
      <SearchBox>
        <label htmlFor={this.idInputSearch}>Find contacts by name</label>
        <Filter
          onChange={this.props.onFilterChange}
          id={this.idInputSearch}
          type="text"
          name="searchValue"
          value={this.props.filter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </SearchBox>
    );
  }
}

export default SearchFilter;
