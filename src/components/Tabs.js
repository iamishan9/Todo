import React from 'react';
import TABS from '../constant';

const Tabs = props => {

  let { setCurrentView, activeTab } = props;
  console.log(activeTab);
  return(
    <div className='tabs'>
      <button onClick={() => setCurrentView(TABS.HOME)
      }>
        All Tasks
      </button>
      <button onClick={() => setCurrentView(TABS.COMPLETED)
      }>
        Completed
      </button>
      <button onClick={() =>  setCurrentView(TABS.REMAINING)
      }>
        Remaining
      </button>
    </div>

  );




};

export default Tabs;