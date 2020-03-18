
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
  }
};

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Row({
  onClickLoading,
  onClickClear,
  onClickGroup,
  group,
  tag,
  setTag,
  loading,
  setLoading
}) 


{
  const classes = useStyles();

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
      <Button variant="contained" color="primary" disabled={loading} onClick={handleClick}>
        {loading == "" ? "Загрузить" : "Загрузка..."}
      </Button>
      <Button variant="contained" color="secondary" onClick={handleClickClear}>Очистить</Button>
      <Button variant="contained" onClick={onClickGroup}>
        {group ? "Разгруппировать" : "Группировать"}
      </Button>
      
    </div>
  );
}
