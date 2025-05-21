import { MdSupervisedUserCircle } from 'react-icons/md';

function Card() {
  return (
    <div className="flex w-full p-4 pr-12 justify-between bg-(--bgSoft) rounded-lg">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-4">
        <span>Total Users</span>
        <span className="text-2xl">100.000</span>
        <span><span className="text-green-400">12%</span> more than previous week</span>
      </div>
    </div>
  );
}

export default Card;