"use client"
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

const Pagination = ({count} : {count : number}) => {
  const searchParams = useSearchParams();
  const {replace} = useRouter();  
  const pathname = usePathname();

  const page = searchParams.get("page") || "1";

  const params = new URLSearchParams(searchParams);
  const ITEMS_PER_PAGE = 2;

  const hasPrev = ITEMS_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEMS_PER_PAGE * parseInt(page) < count;

  const handleChangePage = (type : string) => {
    type === "prev" ? params.set("page", (parseInt(page) - 1).toString()) : params.set("page", (parseInt(page) + 1).toString());
    replace(`${pathname}?${params}`);
  }
  return (
    <div className="flex justify-between items-center p-4">
      <button className="text-black text-sm py-1 px-2 bg-[#f5f5f5] rounded-md" disabled={!hasPrev} onClick={() => handleChangePage("prev")}>Previous</button>
      <button className="text-black text-sm py-1 px-2 bg-[#f5f5f5] rounded-md" disabled={!hasNext} onClick={() => handleChangePage("next")}>Next</button>
    </div>
  );
};

export default Pagination;