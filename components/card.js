export default function Card({ item, setTag }) {
  const handelClick = () => {
    setTag(item.tag);
  };

  return (
    <div>
      <iframe src={item.url} alt={item.tag} onClick={handelClick} />
    </div>
  );
}
