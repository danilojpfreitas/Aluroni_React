import styles from './Footer.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { useNavigate } from 'react-router-dom';

export default function Footer(){
    const navigate = useNavigate();
    return (
        <footer className={styles.footer}>
            <Logo onClick={() => navigate('/')}/>
        </footer>
    );
}