import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  button: {
    marginRight: "5px"
  }
};

export default function Row({
  onClickLoading,
  onClickClear,
  onClickGroup,
  group,
  tag,
  setTag,
  loading,
  setLoading
}) {
  const handleChangeTag = event => {
    setTag(event.target.value);
  };

  const handleClick = () => {
    if (tag == "") {
      alert("заполните поле 'тег'");
    } else {
      onClickLoading(tag);
      setLoading(true);
      setTag("");
    }
  };

  const handleClickClear = () => {
    onClickClear();
    setTag("");
  };

  return (
    <div style={styles.root}>
      <TextField
        id="standard-basic"
        label="Введите тег"
        type="text"
        name="tagName"
        value={tag}
        onChange={handleChangeTag}
      />
      <Button
        style={styles.button}
        variant="contained"
        color="primary"
        disabled={loading}
        onClick={handleClick}
      >
        {loading == "" ? "Загрузить" : "Загрузка..."}
      </Button>
      <Button
        style={styles.button}
        variant="contained"
        color="secondary"
        onClick={handleClickClear}
      >
        Очистить
      </Button>
      <Button style={styles.button} variant="contained" onClick={onClickGroup}>
        {group ? "Разгруппировать" : "Группировать"}
      </Button>
    </div>
  );
}
