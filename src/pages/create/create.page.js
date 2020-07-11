import React from 'react';
import HeadingPair from '../../components/heading-pair/heading-pair.component';
import Sidebar from '../../components/sidebar/sidebar';


function CreatePage() {

    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <div className="px-5 border col-md-10 d-md-block ">
                    <div className="container border" >
                        <HeadingPair heading="Color Theming" subheading="Select your preferred color theming for invoices" />
                        <div className="d-flex flex-row justify-content-around m-2 p-4" >
                            <button value="primary" className="color bg-primary" onClick={e => console.log(e.target.value)} ></button>
                            <button className="color bg-secondary "></button>
                            <button className="color bg-success "></button>
                            <button className="color bg-danger "></button>
                            <button className="color bg-info "></button>
                            <button className="color bg-dark "></button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )

}
export default CreatePage;