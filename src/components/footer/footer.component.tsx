import React from 'react'
import Button from 'terra-button'
import Spacer from 'terra-spacer'
import ActionFooter from 'terra-action-footer'
// import './footer.component.css'

const Footer = () => (
  <div style={{ position: 'fixed', bottom: '0', width: '99%' }}>
    <ActionFooter
      end={
        <React.Fragment>
          <Spacer isInlineBlock marginRight='medium'>
            <Button text='Submit' variant={Button.Opts.Variants.EMPHASIS} />
          </Spacer>
          <Button text='Cancel' />
        </React.Fragment>
      }
    />
  </div>
)

export default Footer
