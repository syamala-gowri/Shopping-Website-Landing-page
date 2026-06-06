import React from 'react'

const Banner = ({banner}) => {
  
  return (
    <div>
      <div className = 'bannerSection'>
        <div className ="bannerBox">
          <img src={banner} alt="Banner" className="bannerImage" />
        </div>
      </div>
    </div>
  )
}

export default Banner
