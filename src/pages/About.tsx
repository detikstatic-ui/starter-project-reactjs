import DropdownMenuDemo from "@/components/DropdownMenuDemo"

const About = () => {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Title: Welcome to the About Page
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit sunt
          dolorum corporis eum esse quasi in, placeat neque ea ut, quisquam,
          ipsum amet adipisci consequatur. Nisi nemo iusto obcaecati esse?
        </p>
        <h2>Latest Article</h2>
        <ul>
          <li>Article 1</li>
          <li>Article 2</li>
          <li>Article 3</li>
          <li>Article 4</li>
        </ul>
      </div>
      <div>
        <DropdownMenuDemo />
      </div>
    </section>
  )
}
export default About
