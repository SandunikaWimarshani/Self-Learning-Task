import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function List() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={toggleCollapse}>
        View List of Users
      </button>
      <Collapse in={isOpen}>
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Mobile No</th>
              <th>Optional</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample data, replace with actual data */}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                {/* Update Icon */}
                <FontAwesomeIcon icon={faEdit} style={{ cursor: 'pointer', marginRight: '10px', color: 'green' }} />
                {/* Delete Icon */}
                <FontAwesomeIcon icon={faTrash} style={{ cursor: 'pointer', color: 'red' }} />
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </Collapse>
    </div>
  );
}

export default List;
