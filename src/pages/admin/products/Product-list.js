import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductList(){
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    function getProducts() {
        // fetch("http://localhost:4000/products")
        fetch("http://localhost:8000/products?_sort=id&_order=desc")
            .then(response => {
                if (response.ok) {
                    // Return the parsed JSON data
                    return response.json(); // Make sure to return the promise
                }

                throw new Error("Network response was not ok");
            })
            .then(data => {
                setProducts(data); // Assuming setProducts is defined somewhere
            })
            .catch(error => {
                console.error("Unable to get the data:", error);
            });
    }

    useEffect(() => {
        getProducts();
    }, []);

    function deleteProduct(id){
        fetch("http://localhost:8000/products/" + id,{
            method:"DELETE"
        })
        .then(response =>{
            if(!response.ok){
                throw new Error();
            }
            getProducts()
        })
        .catch(error =>{
            alert("Unable the Delete the Product!")
        })
    }
    return(
        <div className="container my-4">
            <h2 className="text-center mb-4">Products</h2>

            <div className="row mb-3">
                <div className="col">
                    <a className="btn btn-primary me-1" onClick={()=>navigate("/admin/products/create")} role="button">Create Product</a>
                    <button type="button" onClick={getProducts} className="btn btn-outline-primary">Refresh</button>
                </div>
                <div className="col"></div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Created At</th>
                        <th>Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => {
                            return (
                                <tr key={index}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.brand}</td>
                                    <td>{product.category}</td>
                                    <td>{product.price}</td>
                                    <td><img src={"http://localhost:8000/images/" + product.imageFilename} width="100" height="50" alt="..." /></td>
                                    <td>{product.createAt?.slice(0, 10)}</td>
                                    <td style={{ width: "10px", whiteSpace: "nowrap" }}>
                                        <Link className="btn btn-primary btn-sm me-1" to={"/admin/products/edit/" + product.id}>Edit</Link>
                                        <button type="button" className="btn btn-danger btn-sm" onClick={() => deleteProduct(product.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}