export default function Article() {
  const name = 'Febrian';
  const titiles = ['Tutorial Reactjs', 'Tutorial Nextjs', 'Tutorial Nodejs'];

  return (
    <>
      <div>{name}</div>
      <div>{titiles.map((title) => {
        return (
          <>
            <div>{title}</div>
            <div>{title}</div>
          </>
        );
      })}</div>
    </>
  );
}
