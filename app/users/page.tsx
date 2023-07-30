import UserCard from '@/components/UserCard/UserCard';
import { prisma } from '@/lib/prisma';

export const metadata = {
  title: 'Users',
  description: 'Users page',
};

export default async function Users() {
  const users = await prisma.user.findMany();

  return (
    <div className='flex flex-row lex-wrap'>
      {users.map((user) => {
        return <UserCard key={user.id} {...user} />;
      })}
    </div>
  );
}