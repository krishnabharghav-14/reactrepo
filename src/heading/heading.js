const Heading1 = (prop) => {
    console.log(prop)
    return(
        <h4>{prop.data}</h4>
    )
}
export default Heading1;

export const Heading2 =(prop) => {
    return(
        <h6>{`Number of cups :${prop.data}`}</h6>
    )
}

export const Heading3 = (prop) => {
    console.log(prop)
    return(
        <h6>{prop.data}</h6>
    )
}