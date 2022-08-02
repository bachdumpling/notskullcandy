import React from 'react'
import trendingpic1 from '../Assets/trendingpic1.png'
import trendingpic2 from '../Assets/trendingpic2.png'
import trendingpic3 from '../Assets/trendingpic3.png'
import perfectaudioawaits from '../Assets/perfectaudioawaits.png'
import workshop from '../Assets/workshop.png'


function Trending() {
  return (
    <div>
      <div className=' flex-row grid grid-cols-3'>
        <div >
          <img className='w-full h-full' src={trendingpic1} />
        </div>
        <div>
          <img className='w-full h-full' src={trendingpic2} />
        </div>
        <div>
          <img className='w-full h-full' src={trendingpic3} />
        </div>
      </div>

      <div>
        <img className='w-full h-auto' src={workshop}/>
      </div>

      <div>
        <img className='w-full h-auto' src={perfectaudioawaits}/>
      </div>
    </div>
  )
}

export default Trending