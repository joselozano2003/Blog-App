import Link from "next/link"

export default function PostCard({ post }: any) {
    return (
        <Link href={`/view/${post.id}`}>
            <div className="card bordered shadow-lg bg-base-100 m-2">
                <div className="card-body text-center">
                    <h1 className="text-center font-bold text-2xl">{post.title}</h1>
                    <hr className="border-2 border-primary rounded"/>
                    <p>{post.description}</p>
                </div>
            </div>
        </Link>
    )
}