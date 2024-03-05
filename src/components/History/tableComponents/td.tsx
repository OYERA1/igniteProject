export default function Td({children}: {children: React.ReactNode}) {
  return (
        <td className="bg-base-divider border-t-4 border-base-elements text-base-text p-4 text-sm leading-[1.6] first:pl-6 first:w-1/2 last:pl-6">
      {children}
       </td>
  );
};
