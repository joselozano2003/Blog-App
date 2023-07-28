import PostCard from "@/components/PostCard"

export default function UserPosts({ posts }: any) {

    

    return (
        <div className="text-center flex flex-col justify-center h-full">
            <h1 className="text-3xl font-bold mb-5">My Posts</h1>
            {posts.map((post: any) => (
                <PostCard post={post}/>
            ))}
        </div>
    )
}