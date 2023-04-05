import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Naving() {
  return (
    <div>
      
     <Navbar bg="primary" variant="dark">
        <Container>
        <img
              src="https://iconape.com/wp-content/files/yl/33940/png/asus-rog-1.png"
              width="30"
              height="30"
            
              className="d-inline-block align-top"
              alt=""
            />

          <Navbar.Brand href="#home">Asus-ROG</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://www.asus.com/us/">Home</Nav.Link>
            <Nav.Link href="https://www.consumeraffairs.com/computers/asus.html">Reviews</Nav.Link>
            <Nav.Link href="https://www.asus.com/us/store/">Store</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br></br>
      <div >
      <img style={{width:'700px',height:'500px'}} src='https://www.wallpapertip.com/wmimgs/81-816302_asus-rog-laptop-gx501-4k-wallpaper-data-src.jpg' alt=''/>
    
    </div>
    </div>
  )
}

export default Naving