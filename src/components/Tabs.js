import React from 'react';
import PropTypes from 'prop-types';

import TABS from '../constant';
/**
 *
 *
 * @param {*} props
 * @returns
 */
const Tabs = props => {
  const { setSelectedTab } = props;

  return (
    <div className="tabs">
      <button onClick={() => setSelectedTab(TABS.HOME)}>All</button>
      <button onClick={() => setSelectedTab(TABS.COMPLETED)}>Done</button>
      <button onClick={() => setSelectedTab(TABS.REMAINING)}>Left</button>
    </div>
  );
};

Tabs.propTypes = {
  setSelectedTab: PropTypes.func.isRequired
};

export default Tabs;
