import { SimpleButton, CheckBox } from "@repo/ui/button";

export default function Home() {

  const click = () => {
    console.log('clicked');
  }

  return (
    <>
      <SimpleButton colorScheme="teal" variant="solid" size="md" text="Click Me" handleClick={click} />
      <CheckBox colorScheme="blue" size="md" text="check me" handleClick={click} />
    </>
  )
}
