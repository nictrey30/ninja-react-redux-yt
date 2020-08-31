import React from 'react';

const Ninjas = ({ ninjas, deleteNinja }) => {
  return (
    <div className='ninja-list'>
      {ninjas.map((ninja, index) => {
        return ninja.age > 20 ? (
          <div key={index}>
            Name: {ninja.name}, age: {ninja.age}, belt: {ninja.belt}
            <button
              style={{ marginLeft: '10px' }}
              onClick={() => deleteNinja(ninja.id)}
            >
              Delete Ninja
            </button>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default Ninjas;
