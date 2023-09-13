import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRef } from 'react';




 
const SearchComponent = () => {
    const inputRef=useRef()
  return (
    <div>
    <Form className="d-flex">
  <Row>
    <Col xs="12" className="mx-auto">
      <Form.Control
        type="text"
        placeholder="Search"
        className="search-input"
        onChange={props.handlechange}
        ref={inputRef}
      />
    </Col>
    <Col xs="auto">
    </Col>
  </Row>
</Form>
      
    </div>
  )
}

export default SearchComponent
