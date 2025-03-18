"use client";
import Link from "next/link";

import { motion } from "framer-motion";
import type { JSX } from "react";

function NotFoundPage(): JSX.Element {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delay: 0.2,
				duration: 2,
			},
		},
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<div className="flex flex-col gap-8">
				<motion.p
					className="font-mono text-xs text-center whitespace-pre"
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					{`
  _  _      ___    _  _
 | || |    / _ \\  | || |
 | || |_  | | | | | || |_
 |__   _| | | | | |__   _|
    | |   | |_| |    | |
    |_|    \\___/     |_|
      `}
				</motion.p>

				<div className="text-center">
					<h1 className="font-mono text-2xl">Page Not Found</h1>
					<h2 className="font-mono text-lg">Oops, that page doesn't exist</h2>
				</div>

				<div className="flex items-center justify-center">
					<Link
						href="/"
						className="px-4 py-2 font-mono text-xs rounded-xs outline outline-stone-300 hover:bg-stone-300"
					>
						← Go back home
					</Link>
				</div>
			</div>
		</div>
	);
}

export default NotFoundPage;
