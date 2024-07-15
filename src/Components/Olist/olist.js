import ListGroup from 'react-bootstrap/ListGroup';

function CustomList(prop) {
    const {iterable} = prop ;
    // console.log(prop)
  return (
    <ListGroup className='list'>
      {
        iterable.map((eachItem) => {
            return (
                <ListGroup.Item>{eachItem}</ListGroup.Item>
            );
        })
      }
    </ListGroup>
  );
}

export default CustomList;