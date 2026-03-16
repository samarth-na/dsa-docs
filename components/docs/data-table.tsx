type Props = {
  headers: string[];
  rows: string[][];
};

export function DataTable({ headers, rows }: Props) {
  return (
    <div className="overflow-x-auto rounded-xl border border-white/10 bg-zinc-950/60">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="bg-zinc-900/80">
            {headers.map((header) => (
              <th key={header} className="border-b border-white/10 px-4 py-3 font-medium text-zinc-100">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={`${row[0]}-${index}`} className="hover:bg-zinc-900/50">
              {row.map((cell, i) => (
                <td key={`${i}-${cell}`} className="border-b border-white/5 px-4 py-3 align-top text-zinc-300">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
