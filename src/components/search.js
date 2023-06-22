import React, { useState } from "react";
import '/home/siva/Documents/e-commerce search product app/search/src/components/search.css'

function Search(){
    const [search,setSearch] = useState('');
    const [products,setproducts] = useState([]);
    const searchInput = (event) =>{
        setSearch(event.target.value)
    }
    const findproducts = async(name) =>{
           await fetch(`http://localhost:9000/search/${name}`)
          .then(repsonse=>{
            return repsonse.json();
          })
          .then(data=>{
            console.log(data,'siva')
            setproducts(data)
           
          })
    }
    return(
        <React.Fragment>
            <div className="container">
            <button onClick={()=>findproducts(search)}><i class="fa-brands fa-searchengin fa-xl"></i> </button>  
            <input type="search" placeholder="search..." className="inputbox" value={search} onChange={searchInput}></input>
            </div>
            <div>
                <table>
                    <tr>
                        <th>product name</th>
                        <th>product price</th>
                    </tr>
                   {products.map((product,index)=>(
                    <tr key={index}>
                    <td>{product.productName}</td>
                    <td>{product.productPrice}</td>
                  </tr>
                   ))}  
                </table>
            </div>
        </React.Fragment>
    )
}
export default Search;