import React from 'react'
import { Button, Container } from 'react-bootstrap'

const CallToAction = (props) => {
  const { theme } = props
  return (
    <div id='contact' className={`w-100 ${theme === 'light' ? "bg-light-gray" : "bg-black"} `}>
      <Container className='container-lg '>
        <div className="text-center">
          <h1>Have an idea? Let’s talk</h1>
          <h5 className={theme === "light" && 'text-light'}>Book a meeting with me and let’s create something amazing.</h5>
          <Button className='mt-5'>Book a meeting</Button>
        </div>
      </Container>
    </div>
  )
}

export default CallToAction