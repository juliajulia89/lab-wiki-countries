import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div>
      <h1> upp sorry </h1>
      <Link to="/"> go back </Link>
    </div>
  );
}

export default ErrorPage;
