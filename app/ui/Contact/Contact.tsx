import { Button } from "@/app/ui/button";
function Contact() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="mx-auto mb-28 flex max-w-fit flex-col gap-1">
        <h1 className="text-center text-5xl font-semibold uppercase">
          Like what you see?
        </h1>
        <span className="self-end text-sm font-medium text-accent">
          let's build something together
        </span>
      </div>

      <Button
        className="rounded bg-black px-20 py-16 text-center text-5xl font-semibold uppercase
          text-foreground hover:bg-foreground hover:text-background"
      >
        REACH OUT
      </Button>
    </div>
  );
}

export default Contact;
