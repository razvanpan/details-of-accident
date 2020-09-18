import React from 'react'
import DetailsOfAccidentBody from './body/body.component'
import DetailsOfAccidentHeader from './header/header.component'
import DetailsOfAccidentFooter from './footer/footer.component'

const DetailsOfAccident = () => {
  return (
    <div
      style={{
        padding: '10px',
        position: 'relative',
        overflowX: 'hidden'
      }}
    >
      <DetailsOfAccidentHeader />
      <DetailsOfAccidentBody />
      <DetailsOfAccidentFooter />
    </div>
  )
}

export default DetailsOfAccident
