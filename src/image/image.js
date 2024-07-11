const Imagecom = (prop) => {


    console.log(prop)
    return (
        <img src={prop.data} width={100} height={100}></img>
    );
}
export default Imagecom;