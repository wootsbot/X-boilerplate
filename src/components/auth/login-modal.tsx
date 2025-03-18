import * as Dialog from "@radix-ui/react-dialog";
import type * as React from "react";

type LoginModalProps = {
	onClose?: () => void;
};

export function LoginModal({ children, onClose }: React.PropsWithChildren<LoginModalProps>) {
	return (
		<Dialog.Root modal open>
			<Dialog.Portal>
				<Dialog.Overlay className="bg-stone-700/80 data-[state=open]:animate-overlayShow fixed inset-0" />
				<Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-hidden">
					<Dialog.Title hidden className="text-lg font-semibold">
						Login
					</Dialog.Title>

					{onClose && (
						<Dialog.Close asChild>
							<button
								type="button"
								className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-hidden"
								aria-label="Close"
								onClick={onClose}
							>
								X
							</button>
						</Dialog.Close>
					)}

					{children}
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
