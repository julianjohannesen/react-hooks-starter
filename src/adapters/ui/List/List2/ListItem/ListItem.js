import React from 'react';
import PropTypes from 'prop-types';

import { ListItem as MaterialListItem, ListItemText } from '@material-ui/core';
import ErrorBoundary from '../../../../components/ErrorBoundary/ErrorBoundary';

// List items are an <li> component by default and not rendered as button, but in our specific
// use case the list item component is a React Router {List} component, so it needs to be wrapped
// in an <li> tag in order for it to be a valid HTML list semantically

const ListItem = ({
  button,
  component,
  listItem,
  listItemClass,
  to,
}) => (
  <ErrorBoundary componentName="ListItem">
    {component !== 'li'
      ? <li>
        <MaterialListItem
          button={button}
          className={listItemClass}
          component={component}
          key={listItem.id}
          to={to ? to.replace(':id', listItem.id) : to}
        >
          <ListItemText primary={listItem.name} />
        </MaterialListItem>
      </li>
      : <MaterialListItem
        button={button}
        className={listItemClass}
        component={component}
        key={listItem.id}
        to={to ? to.replace(':id', listItem.id) : to}
      >
        <ListItemText primary={listItem.name} />
      </MaterialListItem>
    }
  </ErrorBoundary>
);

ListItem.propTypes = {
  button: PropTypes.bool,
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  listItem: PropTypes.exact({
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
  }).isRequired,
  listItemClass: PropTypes.string,
  to: PropTypes.string,
};

ListItem.defaultProps = {
  button: false,
  component: 'li',
  listItemClass: null,
  to: null,
};

export default ListItem;
