import React from 'react';

function Reload() {
  
  function refreshPage() {
    window.location.reload(false);
  }
  
  return (
    <div id="reloadBtnBox">
      <button id="reloadBtn" onClick={refreshPage}>NEW MEAL</button>
    </div>
  );
}

export default Reload;