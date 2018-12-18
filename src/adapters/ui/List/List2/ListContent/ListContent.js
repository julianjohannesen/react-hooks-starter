import React from 'react';
import PropTypes from 'prop-types';

import { List as MaterialList } from '@material-ui/core';
import ErrorBoundary from '../../../../components/ErrorBoundary/ErrorBoundary';
import ListItem from '../ListItem/ListItem';

// This component is currently being used to display the list of search results in the brand search
// page. Lists are a <ul> component by default, but in our specific use case the list item component
// is a React Router {List} component, so adding an 'itemComponent' prop allows a different
// component to be passed if necessary

const ListContent = ({
  button,
  itemComponent,
  listClass,
  listItemClass,
  listItems,
  to,
}) => (
  <div className={listClass}>
    <ErrorBoundary componentName="ListContent">
      <MaterialList>
        {
          listItems.map(listItem => (
            <ListItem
              button={button}
              component={itemComponent}
              listItem={listItem}
              key={listItem.id}
              listItemClass={listItemClass}
              to={to}
            />
          ))
        }
      </MaterialList>
    </ErrorBoundary>
  </div>
);

ListContent.propTypes = {
  button: PropTypes.bool,
  itemComponent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  listClass: PropTypes.string,
  listItemClass: PropTypes.string,
  listItems: PropTypes.arrayOf(
    PropTypes.exact({
      createdAt: PropTypes.string,
      facebook_followers: PropTypes.number,
      facebook_url: PropTypes.string,
      id: PropTypes.number.isRequired,
      instagram_followers: PropTypes.number,
      instagram_url: PropTypes.string,
      name: PropTypes.string.isRequired,
      parent_company: PropTypes.string,
      priority: PropTypes.string,
      rating_date: PropTypes.string,
      rating_type: PropTypes.string,
      ratings_status: PropTypes.string,
      review_date: PropTypes.string,
      size: PropTypes.string,
      sku: PropTypes.string,
      suppdata_status: PropTypes.string,
      sustainability_report_date: PropTypes.string,
      sustainability_report: PropTypes.string,
      updatedAt: PropTypes.string,
      verification_date: PropTypes.string,
      website: PropTypes.string,
    })
  ).isRequired,
  to: PropTypes.string,
};

ListContent.defaultProps = {
  button: false,
  itemComponent: 'li',
  listClass: null,
  listItemClass: null,
  to: null,
};

export default ListContent;
