"use client";

type Props = {
  allTags: string[];
  active: string[];
  onChange: (next: string[]) => void;
};

export default function TagFilter({ allTags, active, onChange }: Props) {
  function toggle(tag: string) {
    const next = active.includes(tag)
      ? active.filter((t) => t !== tag)
      : [...active, tag];
    onChange(next);
  }

  if (allTags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {allTags.map((tag) => {
        const on = active.includes(tag);
        return (
          <button
            key={tag}
            onClick={() => toggle(tag)}
            className={`px-3 py-1 rounded-full text-sm border ${
              on
                ? "bg-black text-white border-black"
                : "bg-white text-zinc-700 border-zinc-300 hover:border-zinc-500"
            }`}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
}
