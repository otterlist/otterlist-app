"use client";

type Props = {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  className?: string;
};

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search brands, products, or tags…",
  className,
}: Props) {
  return (
    <form onSubmit={(e) => e.preventDefault()} className={className ?? ""} role="search">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Search products"
        className="w-full rounded-full border border-gray-300 bg-white/90 px-5 py-3 text-[15px] outline-none transition placeholder:text-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 shadow-sm"
        autoComplete="off"
      />
    </form>
  );
}
