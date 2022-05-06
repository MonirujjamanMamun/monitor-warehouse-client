import React from 'react';

const AddItem = () => {
    return (
        <div>
            <div className="container my-5 py-5">

                {/* <!--Section: Design Block--> */}
                <section>

                    <div className="row">


                        <div className="col-md-8 mb-4">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0 text-font text-uppercase">Delivery address</h5>
                                </div>
                                <div className="card-body">
                                    <form>

                                        <div className="row mb-4">
                                            <div className="col">
                                                <div className="form-outline">
                                                    <input type="text" id="form11Example1" className="form-control" />
                                                    <label className="form-label" >First name</label>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-outline">
                                                    <input type="text" id="form11Example2" className="form-control" />
                                                    <label className="form-label" >Last name</label>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!-- Text input --> */}
                                        <div className="form-outline mb-4">
                                            <input type="text" id="form11Example3" className="form-control" />
                                            <label className="form-label" >Company name</label>
                                        </div>

                                        {/* <!-- Text input --> */}
                                        <div className="form-outline mb-4">
                                            <input type="text" id="form11Example4" className="form-control" />
                                            <label className="form-label" >Address</label>
                                        </div>

                                        {/* <!-- Email input --> */}
                                        <div className="form-outline mb-4">
                                            <input type="email" id="form11Example5" className="form-control" />
                                            <label className="form-label" >Email</label>
                                        </div>

                                        {/* <!-- Number input --> */}
                                        <div className="form-outline mb-4">
                                            <input type="number" id="form11Example6" className="form-control" />
                                            <label className="form-label" >Phone</label>
                                        </div>

                                        {/* <!-- Message input --> */}
                                        <div className="form-outline mb-4">
                                            <textarea className="form-control" id="form11Example7" rows="4"></textarea>
                                            <label className="form-label" >Additional information</label>
                                        </div>

                                        {/* <!-- Checkbox --> */}
                                        <div className="form-check d-flex justify-content-center mb-2">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="form11Example8" />
                                            <label className="form-check-label">
                                                Create an account?
                                            </label>
                                        </div>
                                    </form>
                                </div>

                            </div>
                            <div className="text-center">
                                <button type="button" className="btn button-order col-md-10">Place order</button>
                            </div>

                        </div>






                    </div>

                </section>
                {/* <!--Section: Design Block--> */}

            </div>
        </div>
    );
};

export default AddItem;