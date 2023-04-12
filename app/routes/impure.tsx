import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import * as SeparatorRadix from "@radix-ui/react-separator";
import { Form, useLoaderData, useSubmit } from "@remix-run/react";
import type { ActionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { acceptTac, getAcceptedTac, hasChanged } from "~/models/tac.server";
import { Toast } from "~/component/Toast";
import { useEffect, useRef, useState } from "react";

function greeting(name: string) {
  const hours = new Date().getHours();
  if (hours < 12) {
    return `Good morning ${name}!`;
  } else if (hours < 18) {
    return `Good afternoon ${name}!`;
  } else {
    return `Good evening ${name}!`;
  }
}

export async function loader() {
  return json({
    name: "user",
    tacAccepted: await getAcceptedTac(),
    hasChanged: await hasChanged(),
  });
}

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();

  console.debug("[Debug] tac accepted =>", formData.get("tac_accepted"));
  await acceptTac(formData.get("tac_accepted"));

  return redirect("/impure");
}

export default function Impure() {
  const { name, tacAccepted, hasChanged } = useLoaderData<typeof loader>();
  const submit = useSubmit();
  const timerRef = useRef(0);
  const [toastOpened, setToastOpened] = useState(hasChanged);

  useEffect(() => setToastOpened(hasChanged), [hasChanged]);
  useEffect(() => {
    if (!toastOpened) return;
    timerRef.current = window.setTimeout(() => {
      setToastOpened(false);
    }, 2000);
  }, [toastOpened]);

  return (
    <>
      <div
        style={{
          backgroundImage:
            "linear-gradient(330deg, hsl(272, 53%, 50%) 0%, hsl(226, 68%, 56%) 100%)",
        }}
        className={"flex h-[100vh] flex-col items-center justify-center"}
      >
        <div className="mx-[15px] w-full max-w-[300px]">
          <div className="text-[15px] font-medium leading-5 text-white">
            {greeting(name)}
          </div>
          <div className="text-[15px] leading-5 text-white">
            Radix Primitives is an open-source UI component library.
          </div>
          <SeparatorRadix.Root className="my-[15px] bg-violet6 data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px" />

          <Form method={"post"} onChange={(e) => submit(e.currentTarget)}>
            <div className="flex items-center">
              <Checkbox.Root
                className="flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-[4px] bg-white shadow-[0_2px_10px] shadow-blackA7 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px_black]"
                defaultChecked={tacAccepted}
                name={"tac_accepted"}
                id="c1"
              >
                <Checkbox.Indicator className="text-violet11">
                  <CheckIcon />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label
                className="pl-[15px] text-[15px] leading-none text-white"
                htmlFor="c1"
              >
                Accept terms and conditions.
              </label>
            </div>
          </Form>
        </div>
      </div>

      <Toast isOpen={toastOpened} onChange={setToastOpened} />
    </>
  );
}
