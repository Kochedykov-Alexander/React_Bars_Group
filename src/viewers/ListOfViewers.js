import React from 'react';
import './listOfViewers.css';
import Table from '../components/Table';


function ListOfViewers() {
  return (
    <div className="listOfViewers">
      <div className="listOfViewers__content">
          <Table/>
      </div>
    </div>
  );
}

export default ListOfViewers;