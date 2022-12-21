import React from 'react';

function Model(props) {
  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="untilLg:modal  modal-middle">
        <div className="untilLg:modal-box">
          {props.children}
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn lg:hidden">Fermer les filtres</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Model;