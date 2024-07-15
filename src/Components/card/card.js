import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CustomList from '../Olist/olist';

function Customcard(prop) {

    const {item} = prop ;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <CustomList iterable={item.ingredients}></CustomList>
        <CustomList iterable={item.instructions}></CustomList>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Customcard;