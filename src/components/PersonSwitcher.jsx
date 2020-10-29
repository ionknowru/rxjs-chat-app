import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import chatStore from '../stores/chat';

function PersonSwitcher() {
  const [chatState, setChatState] = useState(chatStore.initialState);
  const location = window.location.href.split('/')[3];

  const messageNotification = chatState.newDataCount > 0 && (
    <span className="notify">{chatState.newDataCount}</span>
  );

  useEffect(() => {
    chatStore.subscribe(setChatState);
    chatStore.init();
  }, []);

  return (
    <div className="switcher-div">
      <Link to="/first-person">
        <button className="switcher">
          Person 1
          {location !== 'first-person' && location.length > 1 && messageNotification}
        </button>
      </Link>
      <Link to="/second-person">
        <button className="switcher">
          Person 2
          {location !== 'second-person' && messageNotification}
        </button>
      </Link>
    </div>
  );
}

export default PersonSwitcher;
