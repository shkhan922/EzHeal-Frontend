import React,{useContext} from 'react';
import Header from '~/components/ReusableComponent/Header';
import Footer from '~/components/ReusableComponent/Footer';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import userContext from '~/context/cartContext';

const Index = () => {
  const user = useContext(userContext);
  console.log(user)
  
  return (
    <>
      <Header />
      <div className='p-5'>
        <div className="card mb-3">
          <div className="card-header">
              hello Faijan !
          </div>
          <div className="card-body">
            <div><strong>Name</strong> : Faijan</div>
            <div><strong>Email</strong> : faijansaifi@gamil.com</div>
            <div><strong>mobile</strong> : 7982561753</div>
          </div>
        </div>
        <div className="card p-4">
        <Tab.Container id="left-tabs-example"  defaultActiveKey="first">
          <Row >
            <Col sm={3} className='border-end side-nav'>
              <Nav variant="pills" className="flex-column ">
              <Nav.Item>
                  <Nav.Link eventKey="first">Clincal Appointments</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Orders</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Lab Tests</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Online Consultations</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Health Records</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  lorem ipsum 1 
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  lorem ipsum 2
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  lorem ipsum 3
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  lorem ipsum 4
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  lorem ipsum 5
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        </div>
       
      </div>
      <Footer />
    </>
  )
}

export default Index