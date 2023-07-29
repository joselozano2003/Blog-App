'use client'

import React, { useState } from 'react';
import { ErrorAlert, SuccessAlert } from "@/components/alerts";

export default function PostForm({ user }: any) {

    const [isErrorVisible, setIsErrorVisible] = useState(false);

    const [success, setSuccess] = useState('');
    const [isSuccessVisible, setIsSuccessVisible] = useState(false);

    const createPost = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('createPost')

        const formData = new FormData(e.currentTarget);

        const body = {
            title: formData.get('title'),
            content: formData.get('content'),
            description: formData.get('description'),
        }

        console.log(body)

        try {
            const res = await fetch('/api/content', {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json',
                },

            })

            if (!res.ok) {
                setIsErrorVisible(true);
        
                // Set a timer to hide the error alert after 5 seconds
                setTimeout(() => {
                  setIsErrorVisible(false);
                }, 5000);
            }
            else {
                setSuccess('Post created successfully!');
                setIsSuccessVisible(true);

                setTimeout(() => {
                    setIsSuccessVisible(false);
                }, 5000);
                window.location.href = '/dashboard'
                // redirect('/dashboard')
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
    return (
        <div className="flex flex-col justify-center items-center bg-[##e4e6fe]">
            {isErrorVisible && <ErrorAlert/>}
            {isSuccessVisible && <SuccessAlert message={success}/>}

            <p>From {user?.name}</p>
            <form className="mt-5 form-control text-center bg-[#e4e6fe] rounded-[25px] p-5 items-center" onSubmit={createPost}>
                <label className="font-bold" htmlFor="title">Title</label>
                <input type="text" name="title" className="input input-bordered w-full max-w-xs my-2 text-center" required={true}/>
                <label className="font-bold" htmlFor="title">Description</label>
                <input type="text" name='description' className="input input-bordered w-full max-w-xs my-2 text-center" required={true} />
                <label htmlFor="content" className="font-bold">Content</label>
                <textarea
                className="textarea h-60 sm:w-[80%] md:w-[500px] my-2"
                name="content"
                cols={20}
                rows={20}
                required={true}
                ></textarea>
                <button className="btn-primary btn mt-5" type="submit">Create Post</button>
            </form>
        </div>
    )
}