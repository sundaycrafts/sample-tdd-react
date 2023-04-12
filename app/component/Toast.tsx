import * as ToastRadix from "@radix-ui/react-toast";

export const Toast = ({
  isOpen,
  onChange,
}: {
  isOpen: boolean;
  onChange: (isOpen: boolean) => void;
}) => (
  <ToastRadix.Provider swipeDirection="right">
    <ToastRadix.Root
      className="data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=end]:animate-swipeOut grid grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-md bg-white p-[15px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] [grid-template-areas:_'title_action'_'description_action'] data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:transition-[transform_200ms_ease-out]"
      open={isOpen}
      onOpenChange={onChange}
    >
      <ToastRadix.Title className="text-slate12 mb-[5px] text-[15px] font-medium [grid-area:_title]">
        Accepted Terms and Conditions
      </ToastRadix.Title>
      <ToastRadix.Description asChild>
        <p className="text-slate11 m-0 text-[13px] leading-[1.3] [grid-area:_description]">
          You have accepted the terms and conditions.
        </p>
      </ToastRadix.Description>
      <ToastRadix.Action
        className="[grid-area:_action]"
        asChild
        altText="Goto schedule to undo"
      >
        <button className="inline-flex h-[25px] items-center justify-center rounded bg-green2 px-[10px] text-xs font-medium leading-[25px] text-green11 shadow-[inset_0_0_0_1px] shadow-green7 hover:shadow-[inset_0_0_0_1px] hover:shadow-green8 focus:shadow-[0_0_0_2px] focus:shadow-green8">
          Ok
        </button>
      </ToastRadix.Action>
    </ToastRadix.Root>
    <ToastRadix.Viewport className="fixed bottom-0 right-0 z-[2147483647] m-0 flex w-[390px] max-w-[100vw] list-none flex-col gap-[10px] p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]" />
  </ToastRadix.Provider>
);
