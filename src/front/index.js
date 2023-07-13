import React from 'react'

function Index() {
  return (
    <div className='main__container'>
      <aside>
        <div className='top'>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className='profile-photo'>
          <img src={require('../assets/profile-3.jpg')} alt='' />
        </div>
        <sidebar>
          <a href='#'>
            <i className='fa-sharp fa-solid fa-s'></i>
          </a>
          <a href='#'>
            <i className='fa-solid fa-a'></i>
          </a>
          <a href='#'>
            <i className='fa-solid fa-headset'></i>
          </a>
          <a href='#'>
            <i className='fa-solid fa-flag'></i>
          </a>
        </sidebar>
        <a href='#'>
          <i class='fa-solid fa-power-off'></i>
        </a>
      </aside>

      <div className='next__sidebar'>
        <div className='general'>
          <h2>General</h2>
          <div className='container'>
            <i class='fa-sharp fa-solid fa-grid-horizontal'></i>
            <i className='fa-sharp  fa-calculator'></i>
            <i className='fa-solid fa-wallet'></i>
            <i className='fa-solid fa-download'></i>
            <i className='fa-solid fa-wallet'></i>
          </div>
        </div>
        <div className='account'>
          <h2>Account</h2>

          <div className='container'>
            <i className='fa-solid fa-fire-flame-curved'></i>
            <i className='fa-sharp fa-pot-food'></i>
            <i className=' fa-regular fa-notes-medical'></i>
            <i className='fa-solid fa-user'></i>
          </div>
        </div>
      </div>

      <main>more to main</main>
    </div>
  )
}

export default Index
