import Separator from "@/src/components/Form/Separator";
export default function Countdown({
	minutes,
	seconds,
}: { minutes: string; seconds: string }) {
	return (
		<div className="flex items-center justify-between">
			<div className="flex gap-4">
				<Separator>{minutes[0]}</Separator>
				<Separator>{minutes[1]}</Separator>
			</div>

			<span className="flex text-[10rem] font-bold leading-[10px] text-product-green pb-4">
				:
			</span>
			<div className="flex gap-4">
				<Separator>{seconds[0]}</Separator>
				<Separator>{seconds[1]}</Separator>
			</div>
		</div>
	);
}
