"use client";

type Props = {
  allTags: string[];
  active: string[];                          // <-- multi-select
  onChange: (next: string[]) => void;
};

export default function TagFilter({ allTags, active, onChange }: Props) {
  function toggle(tag: string) {
    const next = active.includes(tag)
      ? active.filter(t => t !== tag)        // remove
      : [...active, tag];                    // add
    onChange(next);
  }

  return (
    <div className="flex flex-wrap gap-2">
      {allTags.map(tag => {
        const on = active.includes(tag);
        return (
          <button
            key={tag}
            onClick={() => toggle(tag)}
            className={[
              "rounded-full px-3 py-1 text-sm transition",
              on
                ? "bg-zinc-900 text-white"
                : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
            ].join(" ")}
            aria-pressed={on}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
}
