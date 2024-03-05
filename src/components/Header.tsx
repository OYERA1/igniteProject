"use client";

import { Clock, Scroll, Alien } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FormHeader() {
	const routeName = usePathname();
	return (
		<header className="flex min-h-12 w-full items-center justify-between">
			<Link
				href="/"
				className="flex h-12 w-12 items-center justify-center text-product-green"
			>
				<Alien size={24}>icon</Alien>
			</Link>
			<nav className="flex gap-2 text-base-text ">
				<Link
					title="Timer"
					href="/"
					className=" h-12 w-12 border-b-2 border-transparent
          hover:border-b-product-green
          "
				>
					<Clock
						size={24}
						className={`m-3
            ${routeName === "/" ? "text-product-green" : undefined}`}
					/>
				</Link>
				<Link
					title="History"
					href="/history"
					className="h-12 w-12 border-b-2 border-transparent
          hover:border-b-product-green
          
          "
				>
					<Scroll
						size={24}
						className={`m-3
            ${routeName === "/history" ? "text-product-green" : undefined}`}
					/>
				</Link>
			</nav>
		</header>
	);
}
