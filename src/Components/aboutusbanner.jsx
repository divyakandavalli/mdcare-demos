
import '../Pages/Features.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
const AboutUsBanner = () => {
  return (
         <section className='page-banner-area font-roboto'>
        <Container fluid>
          <div className='page-banner-image'>
            <img
              src='https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/04/bg20.jpg'
              alt='banner'
            />
          </div>
          <div className='page-banner-inner'>
            <Row className=' justify-content-center align-items-center'>
              <Col lg={8} md={12}>
                <div className='content'>
                  <h1>
                    <b>About us</b>
                  </h1>
                  <ul className='list'>
                    <li>
                      <Link to='/'>Home</Link>
                    </li>
                    <li>About us</li>
                  </ul>
                </div>
              </Col>
              <Col lg={4} md={12}>
                <ul className='information'>
                  <li>
                    <div className='phone-btn'>
                      <div className='icon'>
                        <FontAwesomeIcon icon={faPhoneVolume} />
                      </div>
                      <span>
                        CALL:
                        <a href='tel:01132534567'>1-877-377-8999</a>
                      </span>
                    </div>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
  );
};

export default AboutUsBanner;
