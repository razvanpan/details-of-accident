import React from 'react'
import LabelValueView from 'terra-clinical-label-value-view'
import DetailView from 'terra-clinical-detail-view'

const dateItem = <LabelValueView label='Date' textValue='26/06/2019' />
const timeItem = <LabelValueView label='Time' textValue='10:15' />
const locationItem = (
  <LabelValueView label='Location' textValue='Goethestrasse 12' />
)
const typeItem = <LabelValueView label='Type' textValue='Car Accident' />
const helmetItem = <LabelValueView label='Helmet' textValue='Yes' />
const mechanismItem = <LabelValueView label='Mechanism' textValue='Blunt' />
const DetailViewDivided = () => (
  <div>
    <DetailView
      details={[
        <DetailView.DetailList key='order-info-2'>
          <DetailView.DetailListItem item={dateItem} />
          <DetailView.DetailListItem item={timeItem} />
          <DetailView.DetailListItem item={locationItem} />
          <DetailView.DetailListItem item={typeItem} />
          <DetailView.DetailListItem item={helmetItem} />
          <DetailView.DetailListItem item={mechanismItem} />
        </DetailView.DetailList>
      ]}
      isDivided={false}
    />
  </div>
)
export default DetailViewDivided
