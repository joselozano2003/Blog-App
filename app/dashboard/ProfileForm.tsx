'use client';

export default function ProfileForm({ user }: any) {

    const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);

        const body = {
            name: formData.get('name'),
            bio: formData.get('bio'),
            age: formData.get('age'),
            image: formData.get('image'),
        };

        const res = await fetch('/api/user', {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        await res.json();
    };



    return (
        <div className="flex flex-col justify-center items-center md:justify-start mb-5">
            <h1 className="text-3xl font-bold mb-5">Modify Profile</h1>
            <div className="shadow-xl w-full max-w-xs p-5 bg-warning rounded">
            <form onSubmit={updateUser} className="form-control">
                <label className="font-bold" htmlFor="name">Name</label>
                <input type="text" name="name" className="input input-bordered w-full max-w-xs my-2 text-center" defaultValue={user?.name ?? ''} />
                <label htmlFor="bio" className="font-bold">Bio</label>
                <textarea
                className="textarea h-24 my-2 text-center"
                name="bio"
                cols={10}
                rows={10}
                defaultValue={user?.bio ?? ''}
                ></textarea>
                <label htmlFor="age" className="font-bold">Age</label>
                <div className="flex justify-center">
                    <input className="input input-bordered w-[calc(50%)] max-w-xs text-center my-2 " type="number" name="age" defaultValue={user?.age ?? 0} />
                </div>
                <label htmlFor="image" className="font-bold">Profile Image URL</label>
                <input className="input input-bordered my-2" type="text" name="image" defaultValue={user?.image ?? ''} />
                <div className="flex justify-center my-5">
                    <button className="btn-primary btn w-[calc(50%)]" type="submit">Update</button>
                </div>
            </form>
            </div>
        </div>
    );
}