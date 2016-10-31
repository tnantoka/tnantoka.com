import React from 'react'
import FilterLink from '../containers/FilterLink'

const SubTitle = () => (
  <p className="subtitle">
    <FilterLink filter="codes">
      Codes
    </FilterLink>
    {", "}
    <FilterLink filter="apps">
      Apps 
    </FilterLink>
    {", "}
    <FilterLink filter="sites">
      Sites
    </FilterLink>
  </p>
)

export default SubTitle 
