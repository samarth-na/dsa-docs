type Props = {
  headers: string[];
  rows: string[][];
};

export function DataTable({ headers, rows }: Props) {
  return (
    <div className="overflow-x-auto rounded-lg border border-[var(--border-soft)] bg-[var(--bg-surface)]">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="bg-[color-mix(in_srgb,var(--bg-surface)_80%,black)]">
            {headers.map((header) => (
              <th
                key={header}
                className="border-b border-[var(--border-soft)] px-4 py-3 text-[0.85rem] font-medium text-[var(--text-primary)]"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={`${row[0]}-${index}`}
              className="hover:bg-[color-mix(in_srgb,var(--bg-surface)_85%,black)]"
            >
              {row.map((cell, i) => (
                <td
                  key={`${i}-${cell}`}
                  className="border-b border-[var(--border-soft)] px-4 py-3 align-top text-[var(--text-secondary)]"
                >
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
