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
            <a href='#'>
              <span className='material-icons-sharp'>business</span>
              <h5>Dashboard</h5>
            </a>
            <a href='#'>
              <span className='material-icons-sharp'>calculate</span>
              <h5>calculator</h5>
            </a>
            <a href='#'>
              <span className='material-icons-sharp'>wallet</span>
              <h5>wallet</h5>
            </a>
            <a href='#'>
              <span className='material-icons-sharp'>savings</span>
              <h5>Savings</h5>
            </a>
            <a href='#'>
              <span className='material-icons-sharp'>price_change</span>
              <h5>Wallet</h5>
            </a>
            <a href='#'>
              <span className='material-icons-sharp'>monetization_on</span>
              <h5>Expenses</h5>
            </a>
          </div>
        </div>
        <div className='account'>
          <h2>Account</h2>

          <div className='container'>
            <a href='#'>
              <span className='material-icons-sharp'>
                local_fire_department
              </span>
              <h5>Upcoming</h5>
            </a>
            <a href='#'>
              <span className='material-icons-sharp'>lunch_dining</span>
              <h5>Food</h5>
            </a>
            <a href='#'>
              <span className='material-icons-sharp'>heart_broken</span>
              <h5>Health</h5>
            </a>
            <a href='#'>
              <span className='material-icons-sharp'>people_alt</span>
              <h5>Account</h5>
            </a>
          </div>
        </div>

        <div className='pro'>
          <img src={require('../assets/images.png')} alt='proads' />
        </div>
      </div>

      <main>
        <header>
          <div className='container'>
            <h2>Invoice</h2>
            <div className='invoices'>
              <article className='invoice'>
                <h2>$45,941</h2>
                <span>OVERDUE</span>
              </article>
            </div>
          </div>
          <div className='container'>
            <h2>Outstanding Revenue</h2>
            <div className='rev'>
              <h2>progressbar here</h2>
            </div>
          </div>
        </header>
      </main>
    </div>
  )
}

export default Index
