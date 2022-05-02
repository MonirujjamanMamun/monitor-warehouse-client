import React from 'react';

const Blog = () => {
    return (
        <>
            {/* <!-- Container for demo purpose --> */}
            < div className="container my-24 px-6 mx-auto" >

                {/* <!-- Section: Design Block --> */}
                <section className="mb-32 text-gray-800 text-center" >


                    <div className="grid gap-x-6 lg:gap-x-12 md:grid-cols-2">
                        <div className="mb-24 md:mb-0">
                            <div className="rounded-lg shadow-lg h-full block bg-white">

                                <div className="p-6">
                                    <h2 className="text-xl font-bold mb-3">Defarence <span className="text-blue-600">JavaScript</span> & <span className="text-blue-600">NodeJS</span></h2>
                                    <ol className="">
                                        <h5 className="text-lg font-bold text-blue-600">JavaScript</h5>
                                        <li>JavaScript is a programming language.</li>
                                        <li>JavaScript can only be run in the browsers.</li>
                                        <li>JavaScript is used in frontend development.</li>
                                    </ol>
                                    <ol>
                                        <h5 className="text-lg font-bold text-blue-600">NodeJs</h5>
                                        <li>NodeJS is a Javascript runtime environment.</li>
                                        <li>JavaScript run outside the browser with the help of NodeJS.</li>
                                        <li>Nodejs is used in server-side development.</li>
                                    </ol>
                                </div>
                            </div>
                        </div>

                        <div className="mb-24 md:mb-0">
                            <div className="rounded-lg shadow-lg h-full block bg-white">

                                <div className="p-6">
                                    <h2 className="text-xl font-bold mb-3">Defarence <span className="text-blue-600">SQL</span> & <span className="text-blue-600">NoSQL</span></h2>
                                    <ol className="">
                                        <h5 className="text-lg font-bold text-blue-600">SQL</h5>
                                        <li>Relational Databases.</li>
                                        <li>Use structured query. Language and have a predefined schema.</li>
                                        <li>Are better for multi-row transactions.</li>
                                        <li>Are vertically scalable are table based</li>
                                    </ol>
                                    <ol>
                                        <h5 className="text-lg font-bold text-blue-600">NoSQL</h5>
                                        <li>Non-relational Databases.</li>
                                        <li>NoSQL databases have dynamic schemas for unstructured data.</li>
                                        <li>Are horizontally scalable are document, key-value, graph or wide-column stores.</li>
                                        <li>Are better for unstructured data like documents or JSON.</li>
                                    </ol>
                                </div>
                            </div>
                        </div>

                        <div className="mb-24 md:mb-0 mt-12">
                            <div className="rounded-lg shadow-lg h-full block bg-white">

                                <div className="p-6">
                                    <h2 className="text-xl font-bold mb-3 text-blue-600">JWT</h2>
                                    <p className="text-justify">JWT means JSON Web Token. It's an open standard used to share security information between two parties a client and a server. A common way to use JWTs is as Auth bearer tokens. In this example, an authorization server creates a JWT at the request of a client and signs it so that it cannot be altered by any other party. The client will then send this JWT with its request to a REST API. The REST API will verify that the JWT's signature matches its payload and header to determine that the JWT is valid. When the REST API has verified the JWT, it can use the claims to either grant or deny the client's request.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-24 md:mb-0 mt-12">
                            <div className="rounded-lg shadow-lg h-full block bg-white">

                                <div className="p-6">
                                    <h2 className="text-xl font-bold mb-3"> Use <span className='text-blue-600'>NodeJS</span> & <span className='text-blue-600'>MongoDB</span> </h2>
                                    <p>Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.</p>
                                    <br></br>
                                    <p>SQL, NoSQL databases like MongoDB are a good choice when your data is document-centric and doesn't fit well into the schema of a relational database, when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section >
                {/* <!-- Section: Design Block --> */}

            </div >
            {/* <!-- Container for demo purpose --> */}
        </>
    );
};

export default Blog;