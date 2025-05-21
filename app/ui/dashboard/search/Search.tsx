"use client";
import { MdSearch } from 'react-icons/md';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

function Search({placeholder}: {placeholder: string}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const {replace} = useRouter();

  const handleSearch = (e : any) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    const form = e.target as HTMLFormElement;
    const input = form.querySelector('input') as HTMLInputElement;
    if (input.value) {
      params.set("q", input.value);
    }
    else {
      params.delete("q");
    }
    
    replace(`${pathname}?${params}`);
  }
  return (
    <form onSubmit={handleSearch} className="flex gap-3 items-center bg-[#2e374a] p-2 rounded-xl">
      <button type="submit" className="text-lg"><MdSearch /></button>
      <input type="text" placeholder={placeholder} className="text-sm font-light"/>
    </form>
  );
}

export default Search;