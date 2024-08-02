const Orderlist = (prop) => {

    const { list } = prop

    return (
        <ol>
            {
                list.map((eachData, ind) => <li key={ind}>{eachData}</li>)
            }
        </ol>
    );

}

export default Orderlist