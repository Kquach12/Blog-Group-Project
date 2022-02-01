import React from 'react'


const Footer = () =>{

  

  return (
      
          <div className="" style={{height: "2.5rem"}}>

            <footer className='footer'>
              <div className='container'>
                <span className="d-flex justify-content-center text-muted">
                  <i style={{fontSize: "2rem"}} className="me-4 bi bi-instagram"></i>
                  <i style={{fontSize: "2rem"}} className="me-4 bi bi-facebook"></i>
                  <i style={{fontSize: "2rem"}} className="me-4 bi bi-youtube"></i>
                  <i style={{fontSize: "2rem"}} className="me-4 bi bi-google"></i>
                  <i style={{fontSize: "2rem"}} className="me-4 bi bi-twitter"></i>
                        <span className="d-flex align-items-center">
                        @ {new Date().getFullYear()} All Rights Reserved. Community Blog
                        </span>
                    
                </span>
              </div>
            </footer>
          </div>
  )
}

export default Footer;
