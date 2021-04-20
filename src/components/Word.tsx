interface WordProps {
  children: string;
  color: string;

}

export function Word(props: WordProps) {

  return (
    < h1
      style={{ backgroundColor: props.color }}

    >
      {props.children}
    </ h1>
  );
}


