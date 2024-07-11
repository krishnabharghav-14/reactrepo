import Imagecom from "../image/image";
import Heading1 from "../heading/heading";
import { Heading2 } from "../heading/heading";
// import Listdata from "../listdata/listdata";
// import Details from "../listdata/listdata";
// import Obj from "../listdata/listdata";
import "./card.css"
const Customcard = (prop) => {
    const{name, cups, image}=prop.data;
    return (
        
        <div className ="card">

            <Imagecom data={image}></Imagecom>
            <Heading1 data={name}></Heading1>
            <Heading2 data={cups}></Heading2>
        </div>
    );
}

export default Customcard;