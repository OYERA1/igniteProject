"use client";

import Image from "next/image";
import { useState } from "react";

export default function Teste() {
	const [number, setNumber] = useState(0);
	
	function addNumber() {
		setNumber(1);
	}
	const date = Date.now();

	return (
		<div>
			<button type="button" onClick={() => addNumber()}>
				Add
			</button>
			<Image src={} loader={}/>
			{date}
		</div>
	);
}
