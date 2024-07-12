const Imagecom = (prop) => {


    console.log(prop)
    return (
        <img src={prop.data} width={290} height={250}></img>
    );
}
export default Imagecom;