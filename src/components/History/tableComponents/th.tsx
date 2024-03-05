export default function Th({children}: {children: React.ReactNode}) {
  return (
        <th className="p-4 text-left text-sm leading-[1.6] first:rounded-tl-lg last:rounded-tr-lg first:pl-6 last:pr-6 bg-base-td text-base-title">
          {children}
       </th>
  );
};
