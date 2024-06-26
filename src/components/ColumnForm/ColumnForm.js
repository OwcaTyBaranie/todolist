import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';

const ColumnForm = props => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_COLUMN' , newColumn: {title, icon}});
        setTitle('');
        setIcon('');
    };

	return (
        <form className={styles.ColumnForm} onSubmit={handleSubmit}>
        <span>Title: <input type="text" value={title} onChange={e => setTitle(e.target.value)} /></span>
        <span> Icon: <input type="text" value={icon} onChange={e => setIcon(e.target.value)} /></span>
        <Button>Add column</Button>
</form>
	);
};
export default ColumnForm;