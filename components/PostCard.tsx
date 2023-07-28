export default function PostCard({ post }: any) {
    return (
        <div className="card bordered shadow-lg bg-base-100 my-2">
            <div className="card-body text-center">
                <h1 className="text-center font-bold text-2xl">{post.title}</h1>
                <hr className="border-2 border-primary rounded"/>
                <p>{post.content}</p>
            </div>
        </div>
    )
}