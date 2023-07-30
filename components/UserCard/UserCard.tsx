import Link from 'next/link';


interface Props {
  id: string;
  name: string | null;
  age: number | null;
  image: string | null;
}

export default function UserCard({ id, name, age, image }: Props) {
  return (
    <div className='card w-96 bg-base-100 shadow-2xl m-5 flex flex-col items-center'>
      <figure className='px-10 pt-10'>
        <img
          src={image ?? '/mememan.webp'}
          alt={`${name}'s profile`}
          className='rounded-full w-40 h-40'
        />
      </figure>
      <div className='card-body items-center text-center'>
        <h3>
         {name}
        </h3>
        <div className='card-actions'>
          <Link href={`/users/${id}`}>
            <button className='btn btn-primary'>View Profile</button>
          </Link>
        </div>
      </div>
    </div>
  );
}