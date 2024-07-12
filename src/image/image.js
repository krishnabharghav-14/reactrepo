const Imagecom = (prop) => {


    console.log(prop)
    return (
        <img src={prop.data} width={288} height={250}></img>
    );
}
export default Imagecom;