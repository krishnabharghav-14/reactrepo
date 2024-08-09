import { useState, useEffect } from 'react'
import axios from 'axios'
// import 'bootstrap/dist/css/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'



const CustomTable = () => {


    const [products, setProducts] = useState([])


    useEffect(() => {
        fetchProducts()
    }, [])


    const fetchProducts = async () => {
        try {
            const res = await axios.get('https://fakestoreapi.com/products')
            const newData = res.data.map((each) => {
                return { ...each, quantity: 1 }
            })
            setProducts(newData)
            console.log(newData)
        }
        catch (err) {
            console.log(err)
        }
        // setProducts(res.data)
    }

    const IncrementHandler = (id)=> {
        const UpdatedData = products.map((each)=> {
            if(each.id==id){
                return { ...each, quantity: each.quantity+1 }
            }
            else{
                return each
            }
        })
        setProducts(UpdatedData)
    }

    const DecrementHandler = (id)=> {
        const UpdatedData = products.map((each)=>{
            if(each.id==id && each.quantity>0){
                console.log(each.id)
                return { ...each, quantity: each.quantity-1 }
            }
            else{
                return each
            }
        })
        setProducts(UpdatedData)
    }


    const TotalAmount = ()=> {
        const amount = products.reduce((accu, each)=> accu+(each.quantity*each.price),0)
        return Math.ceil(amount)
    }

    return (
        <>
            <table className="table table-striped">
                <thead>
                    <th>Grand Total</th>
                </thead>
                <tbody>
                    <tr>
                        <td>{TotalAmount()}</td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Picture</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.length &&
                        products.map((eachData) => {
                            return (
                                <tr>
                                    <td>{eachData.id}</td>
                                    <td>{eachData.title}</td>
                                    <td>{eachData.category}</td>
                                    <td><img src={eachData.image} width={100} height={100} /></td>
                                    <td>
                                        <button onClick={()=>DecrementHandler(eachData.id)}> - </button>
                                        {eachData.quantity}
                                        <button onClick={()=>IncrementHandler(eachData.id)} > + </button>
                                    </td>
                                    <td>{eachData.quantity*eachData.price}</td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </>
    );
}

export default CustomTable