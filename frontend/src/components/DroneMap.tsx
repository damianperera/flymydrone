import * as React from 'react';

const DroneMap = () => {

  return (
    <div className='DroneMap'>
      <iframe className='ResponsiveIframe' src='https://dronemaps24.org/?lang=en' title='Drone Map' allow="geolocation 'src';"></iframe>
    </div>
  )
}

export default DroneMap
