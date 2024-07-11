const Heading1 = (prop) => {
    console.log(prop)
    return(
        <h2>{prop.data}</h2>
    )
}
export default Heading1;

export const Heading2 =(prop) => {
    return(
        <h4>{`Number of cups :${prop.data}`}</h4>
    )
}