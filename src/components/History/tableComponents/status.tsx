const STATUS_COLOR = {
  green: "before:bg-content-green",
  yellow: "before:bg-yellow-500",
  red: "before:bg-feedback-red"
} as const

interface IStatus {
  children: React.ReactNode
  statusColor: keyof typeof STATUS_COLOR
}

export default function Status({children, statusColor}: IStatus) {
   return (
        <span  className={`flex items-center gap-2 before:content-[''] before:size-2 before:rounded-full ${STATUS_COLOR[statusColor]}`}>
          {children}
       </span>
  );
};
