import { Link, useNavigate } from "react-router-dom";
export default function CreateProduct() {
    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const productData = Object.fromEntries(formData.entries());
        if (!productData.name || !productData.brand || !productData.category || 
            !productData.description || !productData.image.name) {
                alert("Please Fill All The Fields!");
                return

        }
        alert("Thank you")
    }
    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-md-8 max-auto rounded border p-4">
                    <h2 className="text-center mb-5">Create</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Name</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" name="name" />
                                <span className="text-danger"></span>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Brand</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" name="brand" />
                                <span className="text-danger"></span>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Category</label>
                            <div className="col-sm-8">
                                <select className="form-select" name="category">
                                    <option value="Other">Other</option>
                                    <option value="Phone">Phone</option>
                                    <option value="Computer">Computer</option>
                                    <option value="Accessories">Accessories</option>
                                    <option value="Printer">Printer</option>
                                    <option value="Cameras">Cameras</option>
                                </select>
                                <span className="text-danger"></span>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Price</label>
                            <div className="col-sm-8">
                                <input type="number" className="form-control" name="price" step="0.01" min="1" />
                                <span className="text-danger"></span>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Description</label>
                            <div className="col-sm-8">
                                <textarea className="form-control" name="description" row="4"></textarea>
                                <span className="text-danger"></span>
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
                            <div className="offset-sm-4 col-sm-4 d-grid">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                            <div className="col-sm-4 d-grid">
                                <Link className="btn btn-secondary" to="/admin/products" rol="button"></Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}