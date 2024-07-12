import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Imagecom from "../image/image";
import Heading1,{ Heading2 } from "../heading/heading";
import CustomProgressbar from '../reactbootstrap/progressbar';

function Customcard(prop) {
    const { name, cups, image } = prop.data;
    function Percentage (value) {
        var seasons=18;
        var percent=(value/seasons)*100;

        return percent;
    }
  return (
    <Card className='card' style={{ width: '18rem',margin: "10px",overflow:"hidden"}}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Imagecom data={image}></Imagecom>
      <Card.Body>
        <Card.Title><Heading1 data={name}></Heading1></Card.Title>
        <Heading2 data={cups}></Heading2>
        <CustomProgressbar data={Percentage(cups)}></CustomProgressbar>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default Customcard;