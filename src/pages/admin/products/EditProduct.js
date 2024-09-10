import { useEffect, useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditProduct() {

    const params = useParams();

    const [initialData, setInitialData] = useState();

    const [validationErrors, setValidationErrors] = useState([]);

    const navigate = useNavigate();
    function getProduct() {
        fetch("http://localhost:8000/products/" + params.id)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error()
            })
            .then(data => {
                setInitialData(data);
            })
            .catch(error => {
                alert("Unable to read the products details!")
            })
    }
    useEffect(getProduct, [])

    async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const productData = Object.fromEntries(formData.entries());

        if (!productData.name || !productData.brand || !productData.category ||
            !productData.description) {

            alert("Please Fill All The Fields!");
            return
        }
        try {
            const response = await fetch("http://localhost:8000/products/" + params.id, {
                method: "PATCH",
                body: formData
            })
            const data = await response.json();
            if (response.ok) {
                navigate("/admin/products")
            } else if (response.status === 400) {
                setValidationErrors(data)
            } else {
                alert("Unable to Update Product!")
            }
        }
        catch (error) {
            alert("Unable to connect to the server!")
        }

    }
    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-md-8 max-auto rounded border p-4">
                    <h2 className="text-center mb-5">Edit Products</h2>

                    <div className="row mb-3">
                        <label className="col-sm-4 col-form-label">Id</label>
                        <div className="col-sm-8">
                            <input readOnly className="form-control-plaintext" defaultValue={params.id} />

                        </div>
                    </div>
                    {
                        initialData &&
                        <form onSubmit={handleSubmit}>
                            <div className="row mb-3">
                                <label className="col-sm-4 col-form-label">Name</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" name="name" defaultValue={initialData.name} />
                                    <span className="text-danger">{validationErrors.name}</span>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-4 col-form-label">Brand</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" name="brand" defaultValue={initialData.brand} />
                                    <span className="text-danger">{validationErrors.brand}</span>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-4 col-form-label">Category</label>
                                <div className="col-sm-8">
                                    <select className="form-select" name="category" defaultValue={initialData.category}>
                                        <option value="Other">Other</option>
                                        <option value="Phone">Phone</option>
                                        <option value="Computer">Computer</option>
                                        <option value="Accessories">Accessories</option>
                                        <option value="Printer">Printer</option>
                                        <option value="Cameras">Cameras</option>
                                    </select>
                                    <span className="text-danger">{validationErrors.category}</span>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-4 col-form-label">Price</label>
                                <div className="col-sm-8">
                                    <input type="number" className="form-control" name="price" step="0.01" min="1" defaultValue={initialData.price} />
                                    <span className="text-danger">{validationErrors.price}</span>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-4 col-form-label">Description</label>
                                <div className="col-sm-8">
                                    <textarea className="form-control" name="description" row="4" defaultValue={initialData.description}></textarea>
                                    <span className="text-danger">{validationErrors.description}</span>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="offset-sm-4 col-sm-8">
                                    <img src={"http://localhost:8000/images/" + initialData.imageFilename} width="150" alt="..." />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-4 col-form-label">Image</label>
                                <div className="col-sm-8">
                                    <input type="file" className="form-control" name="image" />
                                    <span className="text-danger"></span>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-4 col-form-label">Created At</label>
                                <div className="col-sm-8">
                                    <input readOnly className="form-control-plaintext" defaultValue={initialData.createdAt?.slice(0, 10)} />

                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="offset-sm-4 col-sm-4 d-grid">
                                    <button type="submit" className="btn btn-primary">Update</button>
                                </div>
                                <div className="col-sm-4 d-grid">
                                    <Link className="btn btn-secondary" to="/admin/products" rol="button">Cancel</Link>
                                </div>
                            </div>
                        </form>
                    }
                </div>
            </div>
        </div>
    )
}