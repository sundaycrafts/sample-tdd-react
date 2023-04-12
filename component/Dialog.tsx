import * as RadixDialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

export const Dialog = () => (
  <RadixDialog.Root>
    <RadixDialog.Trigger asChild>
      <button className="inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none text-violet11 shadow-[0_2px_10px] shadow-blackA7 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
        Edit profile
      </button>
    </RadixDialog.Trigger>
    <RadixDialog.Portal>
      <RadixDialog.Overlay className="fixed inset-0 bg-blackA9 data-[state=open]:animate-overlayShow" />
      <RadixDialog.Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
        <RadixDialog.Title className="m-0 text-[17px] font-medium text-mauve12">
          Edit profile
        </RadixDialog.Title>
        <RadixDialog.Description className="mb-5 mt-[10px] text-[15px] leading-normal text-mauve11">
          Make changes to your profile here. Click save when you're done.
        </RadixDialog.Description>
        <fieldset className="mb-[15px] flex items-center gap-5">
          <label
            className="w-[90px] text-right text-[15px] text-violet11"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
            id="name"
            data-testid="name"
            defaultValue="Pedro Duarte"
          />
        </fieldset>
        <fieldset className="mb-[15px] flex items-center gap-5">
          <label
            className="w-[90px] text-right text-[15px] text-violet11"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
            id="username"
            defaultValue="@peduarte"
          />
        </fieldset>
        <div className="mt-[25px] flex justify-end">
          <RadixDialog.Close asChild>
            <button className="inline-flex h-[35px] items-center justify-center rounded-[4px] bg-green4 px-[15px] font-medium leading-none text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 focus:outline-none">
              Save changes
            </button>
          </RadixDialog.Close>
        </div>
        <RadixDialog.Close asChild>
          <button
            className="absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full text-violet11 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
            aria-label="Close"
          >
            <Cross2Icon />
          </button>
        </RadixDialog.Close>
      </RadixDialog.Content>
    </RadixDialog.Portal>
  </RadixDialog.Root>
);
