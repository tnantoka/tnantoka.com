import React, { PropTypes } from 'react'

const SubTitleLink = ({ children, onClick }) => (
  <a href="#"
     onClick={e => {
       e.preventDefault()
       onClick()
     }}
  >
    {children}
  </a>
)

SubTitleLink.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default SubTitleLink
