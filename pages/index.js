import Row from "../components/row";
import Card from "../components/card";
import { useState } from "react";

const styles = {
  img: {
    display: "flex",
    flexWrap: "wrap",
    height: "100%",
    border: "1px solid black"
  }
};

export default function Index() {
  const [url, setUrl] = useState(
    "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=mouse"
  );
  const [items, setItems] = useState([]);
  const [tags, setTags] = useState([]);
  const [group, setGroup] = useState(false);
  const [tag, setTag] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClickLoading = tag => {
    fetch(
      "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + tag
    )
      .then(response => response.json())
      .then(data => {
        if ("data" in data) {
          if ("embed_url" in data.data) {
            setItems([...items, { tag: tag, url: data.data.embed_url }]);
            addTag(tag);
          } else {
            alert("По тегу ничего не найдено");
          }
        } else {
          alert("Произошла http ошибка");
        }
        setLoading(false);
      });
  };

  const addTag = tag => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  };

  const handleClickClear = () => {
    setItems([]);
  };
  const handelClickGroup = () => {
    setGroup(!group);
  };

  const renderCards = () => {
    if (items.length > 0) {
      return (
        <div style={styles.img}>
          {items.map(item => (
            <Card item={item} key={item.url} setTage={setTag} />
          ))}
        </div>
      );
    }
  };

  const renderCardsGroup = () => {
    if (items.length > 0)
      return tags.map(tag => (
        <div key={tag}>
          {tag}
          <div style={styles.img}>
            {items.map(item => {
              if (tag === item.tag) {
                return <Card item={item} key={item.url} setTage={setTag} />;
              }
            })}
          </div>
        </div>
      ));
  };

  return (
    <div>
      <Row
        onClickLoading={handleClickLoading}
        onClickClear={handleClickClear}
        onClickGroup={handelClickGroup}
        group={group}
        tag={tag}
        setTag={setTag}
        loading={loading}
        setLoading={setLoading}
      />
      {group ? renderCardsGroup() : renderCards()}
    </div>
  );
}
