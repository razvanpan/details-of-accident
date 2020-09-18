import React from 'react'
import Button from 'terra-button'
import Spacer from 'terra-spacer'
import ActionFooter from 'terra-action-footer'

const DetailsOfAccidentFooter = () => (
  <div
    style={{
      position: 'fixed',
      bottom: '0',
      width: '99%',
      borderStyle: 'solid',
      borderColor: '#00bfff transparent transparent transparent',
      borderWidth: '1px',
      overflowX: 'hidden'
    }}
  >
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

export default DetailsOfAccidentFooter
