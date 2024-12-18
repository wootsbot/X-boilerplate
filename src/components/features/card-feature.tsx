"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type CardFeatureProps = {
	type: "core" | "optional";
	title: string;
	resume: string;
	figureRight?: ReactNode;
	figureLeft?: ReactNode;
	figuresCenter?: ReactNode;
	authStateComponent?: ReactNode;
	to: string;
};

export function CardFeature({
	type,
	title,
	resume,
	figuresCenter,
	figureRight,
	figureLeft,
	authStateComponent,
	to,
}: CardFeatureProps) {
	return (
		<Link href={to} aria-label={title}>
			<div className="p-[1.5px] rounded-md bg-gradient-to-b from-stone-300 via-stone-300 to-stone-300 hover:from-stone-300 hover:via-red-300 hover:to-red-600 transition-all duration-700 ease-out h-full min-h-[380px]">
				<div
					id="feature"
					className="bg-[#f2f0ed] flex flex-col justify-between gap-4 pt-4 px-6 rounded-md w-auto hover:cursor-pointer overflow-hidden h-full"
				>
					<div className="flex flex-col items-start gap-4">
						<div className="flex items-center gap-2">
							<div className="px-3 py-1 text-xs rounded-full bg-stone-300">
								<div className="flex flex-row items-center gap-2">
									{type === "core" && (
										<>
											<div>〰</div>
											<span>Core</span>
										</>
									)}

									{type === "optional" && (
										<>
											<div>≠</div>
											<span>Optional</span>
										</>
									)}
								</div>
							</div>

							{authStateComponent}
						</div>

						<h4>
							{title} <span className="opacity-0 hover:opacity-1">→</span>
						</h4>

						<div>
							<p className="text-xs font-light text-stone-500">{resume}</p>
						</div>
					</div>

					{figuresCenter && (
						<div className="flex justify-end flex-shrink-0 overflow-hidden -mb-[50px]">{figuresCenter}</div>
					)}

					{figureLeft && <div className="flex-shrink-0 overflow-hidden -ml-[80px] -mb-[50px]">{figureLeft}</div>}

					{figureRight && (
						<div className="flex justify-end flex-shrink-0 overflow-hidden -mr-[50px] -mb-[50px]">{figureRight}</div>
					)}
				</div>
			</div>
		</Link>
	);
}
