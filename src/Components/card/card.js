import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CustomList from '../Olist/olist';
import "./card.css"

// var count = 2;
function Customcard(prop) {

    const {item} = prop ;
    var c = item.id%2==0?"red":"blue";
    console.log(c);
    // count+=1;
  return (
    <Card style={{ width: '30%' , margin: '10px'}}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title className={c}>{item.name}</Card.Title>
        <h6 style={{color:'purple', margin:'10px'}}>Ingredients :</h6>
        <CustomList iterable={item.ingredients}></CustomList>
        <h6 style={{color:'purple', margin:'10px'}}>Instructions :</h6>
        <CustomList iterable={item.instructions}></CustomList>
        {/* <Button variant="primary">Restaurante</Button> */}
      </Card.Body>
    </Card>
  );
}

export default Customcard;