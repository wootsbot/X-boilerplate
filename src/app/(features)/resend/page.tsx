import Link from "next/link";

import Button from "@design-system/button";

import pkg from "~/pkg";

import { Form } from "./form";

import { Card } from "@/components/card";
import type { Tool } from "@/components/tools-list";
import { ToolsList } from "@/components/tools-list";

const TOOLS: Tool[] = [
	{ version: pkg.dependencies.resend, name: "resend", urlRef: "https://resend.com/docs/send-with-nextjs" },
	{ version: pkg.dependencies["react-email"], name: "react-email", urlRef: "https://github.com/resend/react-email" },
	{
		version: pkg.dependencies["@react-email/components"],
		name: "@react-email/components",
		urlRef: "https://react.email/docs/components/head",
	},
	{
		version: pkg.dependencies["@react-email/html"],
		name: "@react-email/html",
		urlRef: "https://react.email/docs/components/html",
	},
	{ version: pkg.dependencies["next-safe-action"], name: "next-safe-action", urlRef: "https://next-safe-action.dev/" },
	{ version: pkg.dependencies.zod, name: "zod", urlRef: "https://zod.dev/" },
	{ version: pkg.dependencies["react-hook-form"], name: "react-hook-form", urlRef: "https://react-hook-form.com/" },
	{
		version: pkg.dependencies["@hookform/resolvers"],
		name: "@hookform/resolvers",
		urlRef: "https://react-hook-form.com/advanced-usage#CustomHookwithResolver",
	},
	{ version: pkg.dependencies.sonner, name: "sonner", urlRef: "https://sonner.emilkowal.ski/" },
];

export default function ResendPage() {
	return (
		<div className="flex flex-col gap-16">
			<section className="grid items-center grid-cols-2 gap-8">
				<div className="flex flex-col items-start gap-5">
					<span className="px-4 py-2 text-sm font-light bg-white rounded-full shadow-md">Opcional</span>
					<h1 className="text-5xl">Resend - Email for developers</h1>
					<p className="text-xl">
						The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.
					</p>

					<div className="flex items-center gap-4">
						<Link href="https://resend.com/nextjs" target="_blank">
							<Button>View Docs ↗</Button>
						</Link>

						<Link href="https://react.email/docs/introduction" target="_blank">
							<Button variant="secondary">View Docs of react-email↗</Button>
						</Link>
					</div>
				</div>

				<Card className="flex flex-col gap-8" mode="demo">
					<div>
						<p>Example of sending an email with an invitation design to participate in an event, including a link.</p>
					</div>

					<Form />
				</Card>
			</section>

			<section className="py-10">
				<div className="flex flex-col gap-8">
					<div className="flex items-end gap-3">
						<h2 className="text-5xl font-medium">Tools</h2>
						<p className="text-sm font-thin">tools used in the development this example and its respective versions.</p>
					</div>

					<ToolsList list={TOOLS} />
				</div>
			</section>
		</div>
	);
}
