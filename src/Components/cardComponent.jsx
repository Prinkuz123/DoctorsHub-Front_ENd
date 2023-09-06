import Card from 'react-bootstrap/Card';

const CardComponent = (props) => {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" style={{ height:'15rem'}}src={props.imageurl} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>{props.text}
      
      </Card.Text>
    </Card.Body>
  </Card>


      
    </div>
  )
}

export default CardComponent
