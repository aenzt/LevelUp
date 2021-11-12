import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import AppHead from "@/Components/AppHead";
import { Inertia } from "@inertiajs/inertia";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';

export default function Individual(props) {
    console.log(showImage() + props.post.trashImage);
    function showImage() {
        return "/uploads/"
    }

    const MySwal = withReactContent(Swal);

    function handleDelete(id) {
        const link = '/dashboard/post/edit/' + id + '?status=false';
        Swal.fire({
            title: 'Are you sure want to deny this post?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Processing',
                    showCancelButton: false,
                    allowOutsideClick: false,
                    didOpen: () => {
                        Swal.showLoading()
                    }
                })
                Inertia.post(link, {}, {
                    preserveScroll: true,
                    onSuccess: () => Swal.close()
                })
            }
        })
    }

    function handleAccept(id) {
        const link = '/dashboard/post/edit/' + id + '?status=true';
        Swal.fire({
            title: 'Are you sure want to accept this post?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, accept it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Processing',
                    showCancelButton: false,
                    allowOutsideClick: false,
                    didOpen: () => {
                        Swal.showLoading()
                    }
                })
                Inertia.post(link, {}, {
                    preserveScroll: true,
                    onSuccess: () => Swal.fire({
                        icon: 'success',
                        title: 'Successfully accepted the post',
                    })
                })
            }
        })
    }
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Welcome {props.auth.user.name}!
                </h2>
            }
        >
            <AppHead title={props.title} />
            <div className="w-full mx-auto sm:px-6 lg:px-8">
                <h1 className="mt-14 text-3xl font-bold">Submission by: {props.post.firstName} {props.post.lastName}</h1>
                <div className="h-1 w-2/5 mb-6 bg-indigo-500 rounded"></div>
                <div className="flex-1 w-3/5 justify-center overflow-x-auto bg-white rounded shadow">
                    {/* <p className="text-lg font-medium mx-2 my-2"><b>Name</b> : {props.post.firstName} {props.post.lastName}</p>
                    <p className='text-lg font-medium mx-2 my-2'><b>Address</b> : {props.post.streetAddress}, {props.post.city}, {props.post.province}, {props.post.postalCode}</p>
                    <p className="text-lg font-medium mx-2 my-2"><b>Plastic</b> : {props.post.plasticType} grams</p>
                    <p className="text-lg font-medium mx-2 my-2"><b>Paper</b> : {props.post.paperType} grams</p>
                    <p className="text-lg font-medium mx-2 my-2"><b>Glass</b> : {props.post.glassType} grams</p>
                    <p className="text-lg font-medium mx-2 my-2"><b>Metal</b> : {props.post.metalType} grams</p> */}
                    <ul className='list-none table mx-3 my-3 text-lg'>
                        <li className='table-row'><b className='table-cell pr-2'>Name</b>: {props.post.firstName} {props.post.lastName}</li>
                        <li className='table-row'><b className='table-cell pr-2'>Status</b>: {props.post.status == 1 ? "Approved" : props.post.status == 2 ? "Denied" : "Awaiting Approval"}</li>
                        <li className='table-row'><b className='table-cell pr-2'>Address</b>: {props.post.streetAddress}, {props.post.city}, {props.post.province}, {props.post.postalCode}</li>
                        <li className='table-row'><b className='table-cell pr-2'>Plastic</b>: {props.post.plasticType} grams</li>
                        <li className='table-row'><b className='table-cell pr-2'>Paper</b>: {props.post.paperType} grams</li>
                        <li className='table-row'><b className='table-cell pr-2'>Glass</b>: {props.post.glassType} grams</li>
                        <li className='table-row'><b className='table-cell pr-2'>Metal</b>: {props.post.metalType} grams</li>
                        <li className='table-row'><b className='table-cell pr-2'>Total Points</b>: {(props.post.plasticType) + (props.post.paperType) + (props.post.glassType) + (props.post.metalType)} points</li>
                        <li className='table-row'><b className='table-cell pr-2'>Trash Photos</b>:<img className='inline mx-2 my-1 max-w-lg max-h-80 p-1 bg-indigo-200' src={showImage() + props.post.trashImage}></img></li>
                        <li className='table-row'><b className='table-cell pr-2'>Receipt Photos</b>:<img className='inline mx-2 my-1 max-w-lg max-h-80 p-1 bg-indigo-200' src={showImage() + props.post.receiptImage}></img></li>
                        <li className='table-row'>
                            <button onClick={() => { handleAccept(props.post.id); }} className={props.post.status == 1 || props.post.status == 2 ? 'hidden' : `bg-green-500 text-white inline items-center px-3 py-2 mx-2 focus:text-indigo-700 focus:outline-none`}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mx-1 my-auto" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <button onClick={() => { handleDelete(props.post.id); }} className={props.post.status == 1 || props.post.status == 2 ? 'hidden' : `bg-red-500 text-white inline items-center px-3 py-2 mx-2 focus:text-indigo-700 focus:outline-none`}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mx-1 my-auto" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </Authenticated>

    )
}
