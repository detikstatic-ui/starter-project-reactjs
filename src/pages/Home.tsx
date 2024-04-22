import { Form, useLoaderData } from "react-router-dom"

import { deleteItem, fetchData } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Headline from "@/components/Headline"

export function homeLoader() {
  const userName = fetchData("userName")
  return { userName }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function homeAction({ request }: { request: any }) {
  const data = await request.formData()
  const { _action, ...values } = Object.fromEntries(data)

  if (_action === "newUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName))
      return null
    } catch (e) {
      throw new Error("There was a problem creating your account.")
    }
  }

  if (_action === "deleteUserName") {
    try {
      deleteItem({
        key: "userName",
      })
      return null
    } catch (e) {
      throw new Error("There was a problem deleting your username.")
    }
  }
}

const Home = () => {
  //@ts-expect-error type error
  const { userName } = useLoaderData()

  return (
    <>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        {!userName && (
          <Form method="post" className="flex items-center gap-2">
            <input
              type="text"
              name="userName"
              className="rounded-md border border-gray-300 px-3 py-2 text-base font-medium text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              required
              placeholder="What is your name?"
              aria-label="Your Name"
              autoComplete="given-name"
            />
            <input type="hidden" name="_action" value="newUser" />
            <Button type="submit" variant={"default"}>
              <span>Submit</span>
            </Button>
          </Form>
        )}
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            {userName && (
              <>
                Welcome back, {userName}
                <br />
              </>
            )}
            Beautifully designed components <br className="hidden sm:inline" />
            built with Radix UI and Tailwind CSS.
          </h1>
          <p className="text-muted-foreground max-w-[700px] text-lg">
            Accessible and customizable components that you can copy and paste
            into your apps. Free. Open Source. And Vite Ready.
          </p>
        </div>
        {userName && (
          <Form method="post">
            <input type="hidden" name="_action" value="deleteUserName" />
            <Button type="submit" variant={"default"}>
              <span>Delete Username</span>
            </Button>
          </Form>
        )}
      </section>

      <Headline className={"mx-auto mt-3 max-w-6xl"} />
    </>
  )
}
export default Home
