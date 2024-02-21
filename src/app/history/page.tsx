"use client";

import Card from "@/components/card";
import Container from "@/components/container";
import Form from "@/components/form/Form";
import HistoryComponent from "@/components/historyComponent";

export default function History() {
	const selected = "history";
	return (
		<Container>
			<Card color={selected}>
				<HistoryComponent />
			</Card>
		</Container>
	);
}
