import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-downlaod' id='app-download'>
        <p>For Better Experience Downlaod <br/> Tomato App</p>
        <div className="app-downlaod-plateform">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload