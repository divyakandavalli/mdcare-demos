import React from 'react'
import './Features.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import DoneAllIcon from '@mui/icons-material/DoneAll'
export default function Features () {
  return (
    <div>
      <section className='page-banner-area'>
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
                    <b>Features</b>
                  </h1>
                  <ul className='list'>
                    <li>
                      <Link to='/'>Home</Link>
                    </li>
                    <li>features</li>
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
      <section className='careers-details-area py-[100px]'>
        <Container>
          <Row className='justify-content-center'>
            <Col lg={12} >
              <div className='careers-details-desc'>
                <div className='content'>
                  <span class='sub'>Features</span>
                  <h2>
                    MDCare <b>Features</b>
                  </h2>
                </div>
                <h3>Drug and Clinical Tools Integration</h3>
                <ul class='list'>
                  <li>
                    <DoneAllIcon
                      sx={{
                        color: '#5DB996',
                        marginRight: '10px',
                        fontSize: '22px'
                      }}
                    />
                    Drug-Drug Interactions, Drug-Disease Interactions
                    (Contraindications, Precautions)
                  </li>
                  <li>
                    <DoneAllIcon
                      sx={{
                        color: '#5DB996',
                        marginRight: '10px',
                        fontSize: '22px'
                      }}
                    />
                    Clinical Decision Tools create evidence-based diagnosis and
                    better treatment decisions.
                  </li>
                  <li>
                    <DoneAllIcon
                      sx={{
                        color: '#5DB996',
                        marginRight: '10px',
                        fontSize: '22px'
                      }}
                    />
                    HIPAA compliant architecture.
                  </li>
                  <li>
                    <DoneAllIcon
                      sx={{
                        color: '#5DB996',
                        marginRight: '10px',
                        fontSize: '22px'
                      }}
                    />
                    Integrated SNOMED and LOINC codes.
                  </li>
                  <li>
                    <DoneAllIcon
                      sx={{
                        color: '#5DB996',
                        marginRight: '10px',
                        fontSize: '22px'
                      }}
                    />
                    Disease Management.
                  </li>
                  <li>
                    <DoneAllIcon
                      sx={{
                        color: '#5DB996',
                        marginRight: '10px',
                        fontSize: '22px'
                      }}
                    />
                    Drawing capabilities and image annotations.
                  </li>
                  <li>
                    <DoneAllIcon
                      sx={{
                        color: '#5DB996',
                        marginRight: '10px',
                        fontSize: '22px'
                      }}
                    />
                    Drug database with 40,000 of the most commonly used
                    Prescription Drugs, Over-the-Counter Drugs, and Herbal
                    medications.
                  </li>
                  <li>
                    <DoneAllIcon
                      sx={{
                        color: '#5DB996',
                        marginRight: '10px',
                        fontSize: '22px'
                      }}
                    />
                    Interface with the National Drug Code (NDC) for More than
                    10,000 NDC coded Drugs.
                  </li>
                  <li>
                    <DoneAllIcon
                      sx={{
                        color: '#5DB996',
                        marginRight: '10px',
                        fontSize: '22px'
                      }}
                    />
                    Over 500 Medical Calculators and Medical Decision Trees.
                  </li>
                </ul>
                <h3>Practice Productivity and Workflow Optimization</h3>
                <ul class='list'>
                  <li>
                    <DoneAllIcon
                      sx={{
                        color: '#5DB996',
                        marginRight: '10px',
                        fontSize: '22px'
                      }}
                    />
                    Improve your practice’s productivity through automation with
                    MDCare+ EMR.
                  </li>
                  <li>
                    <DoneAllIcon
                      sx={{
                        color: '#5DB996',
                        marginRight: '10px',
                        fontSize: '22px'
                      }}
                    />
                    Eliminates pulling and filing charts.
                  </li>
                  <li>
                    <DoneAllIcon
                      sx={{
                        color: '#5DB996',
                        marginRight: '10px',
                        fontSize: '22px'
                      }}
                    />
                    End-of-the-day reporting becomes much easier with EMR
                    customizable reports.
                  </li>
                  <li>
                    <DoneAllIcon
                      sx={{
                        color: '#5DB996',
                        marginRight: '10px',
                        fontSize: '22px'
                      }}
                    />
                    Automated CPT coding increases revenue and saves valuable
                    time.
                  </li>
                  <li>
                    <DoneAllIcon
                      sx={{
                        color: '#5DB996',
                        marginRight: '10px',
                        fontSize: '22px'
                      }}
                    />
                    More than one user can access the medical record.
                  </li>
                  <li>
                    <DoneAllIcon
                      sx={{
                        color: '#5DB996',
                        marginRight: '10px',
                        fontSize: '22px'
                      }}
                    />
                    Access one word anywhere.
                  </li>
                  <li>
                    <DoneAllIcon
                      sx={{
                        color: '#5DB996',
                        marginRight: '10px',
                        fontSize: '22px'
                      }}
                    />
                    Customizable templates.
                  </li>
                  <li>
                    <DoneAllIcon
                      sx={{
                        color: '#5DB996',
                        marginRight: '10px',
                        fontSize: '22px'
                      }}
                    />
                    Clinical documentation designed for speed.
                  </li>
                  <li>
                    <DoneAllIcon
                      sx={{
                        color: '#5DB996',
                        marginRight: '10px',
                        fontSize: '22px'
                      }}
                    />
                    Integrated Digital Signature.
                  </li>
                  <li>
                    <DoneAllIcon
                      sx={{
                        color: '#5DB996',
                        marginRight: '10px',
                        fontSize: '22px'
                      }}
                    />
                    Integrated Spell-Checker.
                  </li>
                  <li>
                    <DoneAllIcon
                      sx={{
                        color: '#5DB996',
                        marginRight: '10px',
                        fontSize: '22px'
                      }}
                    />
                    Workflow optimization.
                  </li>
                  <li>
                    <DoneAllIcon
                      sx={{
                        color: '#5DB996',
                        marginRight: '10px',
                        fontSize: '22px'
                      }}
                    />
                    HL7 Lab interface, HL7 Custom interface.
                  </li>
                  <li>
                    <DoneAllIcon
                      sx={{
                        color: '#5DB996',
                        marginRight: '10px',
                        fontSize: '22px'
                      }}
                    />
                    Integrated DICOM viewer.
                  </li>
                  <li>
                    <DoneAllIcon
                      sx={{
                        color: '#5DB996',
                        marginRight: '10px',
                        fontSize: '22px'
                      }}
                    />
                    Health maintenance recording.
                  </li>
                  <li>
                    <DoneAllIcon
                      sx={{
                        color: '#5DB996',
                        marginRight: '10px',
                        fontSize: '22px'
                      }}
                    />
                    Clinical messaging between physicians and staff.
                  </li>
                  <li>
                    <DoneAllIcon
                      sx={{
                        color: '#5DB996',
                        marginRight: '10px',
                        fontSize: '22px'
                      }}
                    />
                    Patient summary screens that summarize patient clinical
                    condition, allergies, past medical history, and family
                    history.
                  </li>
                  <li>
                    <DoneAllIcon
                      sx={{
                        color: '#5DB996',
                        marginRight: '10px',
                        fontSize: '22px'
                      }}
                    />
                    Over 500 customizable patient education materials.
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}
