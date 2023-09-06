import CardComponent from "../Components/cardComponent";
import "../Style/Style.css";
import Card from "react-bootstrap/Card";
const Body = () => {
  return (
    <div className="body-main"  style={{display:"flex",justifyContent:"center"}} >
      <div className="div-1" >
       <Card className="bg-dark text-white"   >
  <Card.Img src="https://images.pexels.com/photos/4225920/pexels-photo-4225920.jpeg?auto=compress&cs=tinysrgb&w=600/100px270" style={{height:"45rem" ,width:"80rem"}}alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>

<div className="div-2" >
<CardComponent  imageurl="https://images.pexels.com/videos/7579840/pexels-photo-7579840.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=699.825&fit=crop&h=1133.05/100px270"
title="Online consultation"  text=""/>
<CardComponent imageurl="https://images.pexels.com/photos/208541/pexels-photo-208541.jpeg?auto=compress&cs=tinysrgb&w=600" title='Medicines' />
<CardComponent   imageurl="https://images.pexels.com/photos/3846157/pexels-photo-3846157.jpeg?auto=compress&cs=tinysrgb&w=600"  title="Rehabilitation devices"/>
</div>

      </div>


      <div >
    
      </div>
      <div className="div-3"></div>
    </div>
  );
};

export default Body;
