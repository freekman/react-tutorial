import React from 'react'
import FilterLink from './FilterLink';


const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter="show_all">All</FilterLink>
    {", "}
    <FilterLink filter="show_active">Active</FilterLink>
    {", "}
    <FilterLink filter="show_completed">Completed</FilterLink>
  </p>
);

export default Footer
