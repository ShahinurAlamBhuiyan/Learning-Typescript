import React from 'react';

interface IProps {
    name: string,
    email?: string
}

const Contact2 = ({name, email= 'N/A'}: IProps) : JSX.Element => {


    return (
        <div className="card">
          <p>
              <strong>Name</strong>: {name}
          </p>
          <p>
              <strong>Email</strong>: {email}
          </p>
        </div>
    );
};

export default Contact2;