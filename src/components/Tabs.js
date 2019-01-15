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

  const { setCurrentView } = props;
  // console.log(activeTab);

  return(

    <div className='tabs'>
      <button onClick={() => setCurrentView(TABS.HOME)
      }>
        Home
      </button>
      <button onClick={() => setCurrentView(TABS.COMPLETED)
      }>
        Completed
      </button>
      <button onClick={() => setCurrentView(TABS.REMAINING)
      }>
        Remaining
      </button>
    </div>

  );
};

Tabs.propTypes = {
  setCurrentView: PropTypes.func.isRequired
};

export default Tabs;
