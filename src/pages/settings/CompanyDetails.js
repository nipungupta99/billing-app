import React from 'react';
import HeadingPair from '../../components/heading-pair/heading-pair.component';
import FormInput from '../../components/form-input/form-input.component';

function CompanyDetails() {
    return (
        <div className=" px-3 container border my-4" >
            <HeadingPair heading="Company Details" subheading="Edit your company details below" />
            <form action=""  >
                <div className='d-flex px-5 flex-row flex-wrap justify-content-around '>
                    <FormInput label="Name" />
                    <FormInput label="Name" />
                    <FormInput label="Name" />
                    <FormInput label="Name" />
                    <FormInput label="Name" />
                    <FormInput label="Name" />
                    <FormInput label="Name" />
                    <FormInput label="Name" />
                    <FormInput label="Name" />
                    <FormInput label="Name" />
                    <FormInput label="Name" />
                    <FormInput label="Name" />
                    <FormInput label="Name" />
                </div>
                <button className='btn btn-block btn-dark my-3'>Done</button>
            </form>
        </div>
    )
}
export default CompanyDetails