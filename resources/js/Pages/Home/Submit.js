import React from "react";
import AppHead from '@/Components/AppHead'
import NavbarNew from "@/Components/NavbarNew";
import { useForm, usePage } from "@inertiajs/inertia-react";
import FlashMessages from "@/Components/FlashMessages";

export default function Submit(props) {
    const { data, setData, errors, post, processing } = useForm({
        firstName: '',
        lastName: '',
        plasticType: '',
        metalType: '',
        paperType: '',
        glassType: '',
        streetAddress: '',
        province: '',
        city: '',
        postalCode: '',
        userId: props.auth.user.id,
        status: false
      });

    const { flash } = usePage().props;

    function handleSubmit(e){
        e.preventDefault();
        post(route('submit-store'));
    }

    return (
        <div className='bg-gray-200'>
            <AppHead title={props.title} />
            <div className="relative flex justify-center h-full bg-gray-200 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className='absolute top-0 w-full'>
                    <NavbarNew props={props} />
                </div>
                <div className='flex-col mx-auto flex bg-gray-200 w-full justify-center h-full lg:h-screen mt-20 lg:mt-10'>
                    <h1 className="text-3xl text-center font-bold text-black p-3 flex justify-center mt-0 lg:-mt-24">Submit Form</h1>
                    <div className="hidden sm:block" aria-hidden="true">
                        <div className="py-5">
                            <div className="border-t border-gray-300" />
                        </div>
                    </div>
                    <div className="justify-center mx-auto">
                        <FlashMessages/>
                    </div>

                    <div className="mt-5 sm:mt-0">
                        <div className="mt-5 md:mt-0 md:col-span-2 mb-8 justify-center flex">
                            <form name='createForm' onSubmit={handleSubmit}>
                                <div className="shadow overflow-hidden sm:rounded-md">
                                    <div className="px-4 py-5 bg-white sm:p-6 w-[80vw]">
                                        <div className="grid grid-cols-12 gap-6">
                                            <div className="col-span-6 sm:col-span-6">
                                                <label htmlFor="first-name" className="block text-sm font-bold text-gray-700">
                                                    Sender first name
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="First Name"
                                                    name="first-name"
                                                    label="first-name"
                                                    onChange={e => setData('firstName', e.target.value)}
                                                    className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                                                />
                                                {errors.firstName && <div className="form-error">{errors.firstName}</div>}
                                            </div>

                                            <div className="col-span-6 sm:col-span-6">
                                                <label htmlFor="last-name" className="block text-sm font-bold text-gray-700">
                                                    Sender last name
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Last Name"
                                                    name="last-name"
                                                    id="last-name"
                                                    onChange={e => setData('lastName', e.target.value)}
                                                    className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                                                />
                                                {errors.lastName && <div className="form-error">{errors.lastName}</div>}
                                            </div>

                                            <div className="col-span-3 sm:col-span-3">
                                                <label htmlFor="plasticType" className="block text-sm font-bold text-gray-700">
                                                    Plastic
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="In Grams"
                                                    name="plasticType"
                                                    id="plasticType"
                                                    onChange={e => setData('plasticType', e.target.value)}
                                                    className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md ${errors.plasticType ? 'border-red-500' : 'border-gray-300'}`}
                                                />
                                                {errors.plasticType && <div className="form-error">{errors.plasticType}</div>}
                                            </div>

                                            <div className="col-span-3 sm:col-span-3">
                                                <label htmlFor="metalType" className="block text-sm font-bold text-gray-700">
                                                    Metal
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="In Grams"
                                                    name="metalType"
                                                    id="metalType"
                                                    onChange={e => setData('metalType', e.target.value)}
                                                    className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md ${errors.metalType ? 'border-red-500' : 'border-gray-300'}`}
                                                />
                                                {errors.metalType && <div className="form-error">{errors.metalType}</div>}
                                            </div>

                                            <div className="col-span-3 sm:col-span-3">
                                                <label htmlFor="paperType" className="block text-sm font-bold text-gray-700">
                                                    Paper
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="In Grams"
                                                    name="paperType"
                                                    id="paperType"
                                                    onChange={e => setData('paperType', e.target.value)}
                                                    className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md ${errors.paperType ? 'border-red-500' : 'border-gray-300'}`}
                                                />
                                                {errors.paperType && <div className="form-error">{errors.paperType}</div>}
                                            </div>

                                            <div className="col-span-3 sm:col-span-3">
                                                <label htmlFor="glassType" className="block text-sm font-bold text-gray-700">
                                                    Glass
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="In Grams"
                                                    name="glassType"
                                                    id="glassType"
                                                    onChange={e => setData('glassType', e.target.value)}
                                                    className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md ${errors.glassType ? 'border-red-500' : 'border-gray-300'}`}
                                                />
                                                {errors.glassType && <div className="form-error">{errors.glassType}</div>}
                                            </div>

                                            <div className="col-span-6">
                                                <label htmlFor="street-address" className="block text-sm font-bold text-gray-700">
                                                    Sender address
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Address"
                                                    name="street-address"
                                                    id="street-address"
                                                    onChange={e => setData('streetAddress', e.target.value)}
                                                    className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md ${errors.streetAddress ? 'border-red-500' : 'border-gray-300'}`}
                                                />
                                                {errors.streetAddress && <div className="form-error">{errors.streetAddress}</div>}
                                            </div>

                                            <div className="col-span-6 sm:col-span-3 lg:col-span-6">
                                                <label htmlFor="region" className="block text-sm font-bold text-gray-700">
                                                    State / Province
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Province"
                                                    name="region"
                                                    id="region"
                                                    onChange={e => setData('province', e.target.value)}
                                                    className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md ${errors.province ? 'border-red-500' : 'border-gray-300'}`}
                                                />
                                                {errors.province && <div className="form-error">{errors.province}</div>}
                                            </div>

                                            <div className="col-span-6 sm:col-span-6 lg:col-span-6">
                                                <label htmlFor="city" className="block text-sm font-bold text-gray-700">
                                                    City
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="City"
                                                    name="city"
                                                    id="city"
                                                    onChange={ e=> setData('city', e.target.value)}
                                                    className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
                                                />
                                                {errors.city && <div className="form-error">{errors.city}</div>}
                                            </div>

                                            <div className="col-span-6 sm:col-span-3 lg:col-span-6">
                                                <label htmlFor="postal-code" className="block text-sm font-bold text-gray-700">
                                                    ZIP / Postal code
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Postal Code"
                                                    name="postal-code"
                                                    id="postal-code"
                                                    onChange={e => setData('postalCode', e.target.value)}
                                                    className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md ${errors.postalCode ? 'border-red-500' : 'border-gray-300'}`}
                                                />
                                                {errors.postalCode && <div className="form-error">{errors.postalCode}</div>}
                                            </div>

                                            <div className="col-span-6 sm:col-span-6">
                                                <label className="block text-sm font-bold text-gray-700">Trash photo</label>
                                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                    <div className="space-y-1 text-center">
                                                        <svg
                                                            className="mx-auto h-12 w-12 text-gray-400"
                                                            stroke="currentColor"
                                                            fill="none"
                                                            viewBox="0 0 48 48"
                                                            aria-hidden="true"
                                                        >
                                                            <path
                                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                                strokeWidth={2}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                        <div className="flex text-sm text-gray-600">
                                                            <label
                                                                htmlFor="file-upload"
                                                                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                            >
                                                                <span>Upload a file</span>
                                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                            </label>
                                                        </div>
                                                        <p className="text-xs text-gray-500">PNG, JPG, up to 3MB</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-span-6 sm:col-span-6">
                                                <label className="block text-sm font-bold text-gray-700">Receipt photo</label>
                                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                    <div className="space-y-1 text-center">
                                                        <svg
                                                            className="mx-auto h-12 w-12 text-gray-400"
                                                            stroke="currentColor"
                                                            fill="none"
                                                            viewBox="0 0 48 48"
                                                            aria-hidden="true"
                                                        >
                                                            <path
                                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                                strokeWidth={2}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                        <div className="flex text-sm text-gray-600">
                                                            <label
                                                                htmlFor="file-upload"
                                                                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                            >
                                                                <span>Upload a file</span>
                                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                            </label>
                                                        </div>
                                                        <p className="text-xs text-gray-500">PNG, JPG, up to 3MB</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
