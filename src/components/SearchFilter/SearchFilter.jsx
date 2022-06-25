import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';

import s from './SearchFilter.module.css';

class SearchFilter extends Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
  };
  idInputSearch = nanoid();
  render() {
    return (
      <div className={s.input}>
        <label htmlFor={this.idInputSearch}>Find contacts by name</label>
        <input
          onChange={this.props.onFilterChange}
          id={this.idInputSearch}
          type="text"
          name="searchValue"
          value={this.props.filter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
    );
  }
}

export default SearchFilter;
