import React from 'react'
// import FilterLink from '../containers/FilterLink'
import { Link } from 'react-router';

// const SubTitle = () => (
//   <p className="subtitle">
//     <FilterLink filter="codes">
//       Codes
//     </FilterLink>
//     {", "}
//     <FilterLink filter="apps">
//       Apps
//     </FilterLink>
//     {", "}
//     <FilterLink filter="sites">
//       Sites
//     </FilterLink>
//   </p>
// )
const SubTitle = () => (
  <p className="subtitle">
    <Link to="/codes" activeClassName="active">Codes</Link>
    {", "}
    <Link to="/apps" activeClassName="active">Apps</Link>
    {", "}
    <Link to="/sites" activeClassName="active">Sites</Link>
  </p>
)

export default SubTitle
