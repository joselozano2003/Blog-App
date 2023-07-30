'use client';

import React, { useState } from 'react';
import { ErrorAlert, SuccessAlert } from "@/components/alerts";

export default function EditPost({ title, description, content, id, author }: any) {

    const [isErrorVisible, setIsErrorVisible] = useState(false);
    const [success, setSuccess] = useState('');
    const [isSuccessVisible, setIsSuccessVisible] = useState(false);

    async function editPost(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const body = {
            title: formData.get('title'),
            description: formData.get('description'),
            content: formData.get('content'),
            authorId: author,
            id: id,

        };
        try{
            const res = await fetch('/api/content', {
                method: 'PUT',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (!res.ok) {
                setIsErrorVisible(true);
        
                // Set a timer to hide the error alert after 5 seconds
                setTimeout(() => {
                  setIsErrorVisible(false);
                }, 5000);
            }
            else {
                setSuccess('Post Edited successfully!');
                setIsSuccessVisible(true);

                setTimeout(() => {
                    setIsSuccessVisible(false);
                }, 5000);
                window.location.href = `/view/${id}`
            }
        }
        catch (err) {
            console.log("There is an error")
            console.log(err)

            setIsErrorVisible(true);
            setTimeout(() => {
                setIsErrorVisible(false);
            }, 5000);
        }
    }

    async function deletePost() {
        try {

            const body = {
                id: id,
                authorId: author,
            }
            const res = await fetch(`/api/content`, {
                method: 'DELETE',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!res.ok) {
                setIsErrorVisible(true);
        
                // Set a timer to hide the error alert after 5 seconds
                setTimeout(() => {
                  setIsErrorVisible(false);
                }, 5000);
            }
            else {
                setSuccess('Post Deleted successfully!');
                setIsSuccessVisible(true);

                setTimeout(() => {
                    setIsSuccessVisible(false);
                }, 5000);
                window.location.href = `/dashboard`
            }
        }
        catch (err) {
            console.log("There is an error")
            console.log(err)

            setIsErrorVisible(true);
            setTimeout(() => {
                setIsErrorVisible(false);
            }, 5000);
        }
    }

    const [showPopup, setShowPopup] = useState(false);

    const handlePopup = () => {
        setShowPopup(!showPopup);
    }

    return (
        <div className="flex flex-col justify-center items-center bg-[##e4e6fe]">
            {isErrorVisible && <ErrorAlert/>}
            {isSuccessVisible && <SuccessAlert message={success}/>}
            {showPopup && <Popup handle={handlePopup} erase={deletePost}/>}
            <form className="mt-5 form-control text-center bg-[#e4e6fe] rounded-[25px] p-5 items-center" onSubmit={editPost}>
                <label className="font-bold" htmlFor="title">Title</label>
                <input type="text" name="title" className="input input-bordered w-full max-w-xs my-2 text-center" required={true} defaultValue={title}/>
                <label className="font-bold" htmlFor="title">Description</label>
                <input type="text" name='description' className="input input-bordered w-full max-w-xs my-2 text-center" required={true} defaultValue={description}/>
                <label htmlFor="content" className="font-bold">Content</label>
                <textarea
                className="textarea h-60 sm:w-[80%] md:w-[500px] my-2"
                name="content"
                cols={20}
                rows={20}
                required={true}
                defaultValue={content}
                ></textarea>
                <div>
                    <button className="btn-primary btn mt-5 text-white m-2" type="submit">Edit Post</button>
                    <button className="btn-error btn mt-5 text-white m-2" type="button" onClick={() => handlePopup()}>Delete</button>
                </div>
            </form>
        </div>
    )
}

function Popup({ handle, erase }: any) {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg w-1/3 h-1/3 flex justify-center items-center flex-col p-5">
                <p className="text-lg font-bold text-center">Are you sure you want to delete this post?</p>
                <div className="flex justify-center items-center flex-col md:flex-row pt-5">
                    <button className="btn-error btn text-white m-2" type="button" onClick={() => erase()}>Yes</button>
                    <button className="btn-primary btn m-2 text-white" type="button" onClick={() => handle()}>No</button>
                </div>
            </div>
        </div>
    )
}