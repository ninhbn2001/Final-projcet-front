import React from 'react';
import './App.scss';

//components
import WebBar from 'components/WebBar/WebBar';
import BoardBar from 'components/BoardBar/BoardBar';
import BoardContent from 'components/BoardContent/BoardContent';

function App() {
  return (
    <div className="web-master">
      <WebBar />
        <BoardBar />
          <BoardContent />
  </div>
  );
}

export default App;