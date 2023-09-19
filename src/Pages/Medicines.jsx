import CardComponent from "../Components/cardComponent"
import Carousel from 'react-bootstrap/Carousel';

const Medicines = () => {
  return (
    <div className="main-medicine" >  
    <h1>Medicine</h1>
      <div className="med-1">
      <Carousel style={{ width: "100%", height: "400px" }}>
      <Carousel.Item>
        <img src="https://res.cloudinary.com/dpwkpoxxh/image/upload/v1689401879/istockphoto-1341001666-612x612_gmbm82.jpg"  />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://res.cloudinary.com/dpwkpoxxh/image/upload/v1689401879/istockphoto-1341001666-612x612_gmbm82.jpg" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://res.cloudinary.com/dpwkpoxxh/image/upload/v1693893320/pexels-photo-4031818_oangvp.jpg"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      
      
      </div>
  
    <div className="med-2">
    <CardComponent   imageurl="https://res.cloudinary.com/dpwkpoxxh/image/upload/v1694757524/oadmnvbqttgduxraiozr.jpg"/>
    <CardComponent imageurl="https://res.cloudinary.com/dpwkpoxxh/image/upload/v1689401879/istockphoto-1341001666-612x612_gmbm82.jpg"/>
    <CardComponent imageurl="https://res.cloudinary.com/dpwkpoxxh/image/upload/v1689401879/istockphoto-1341001666-612x612_gmbm82.jpg"/>
    </div>

  </div>
)

}

export default Medicines
