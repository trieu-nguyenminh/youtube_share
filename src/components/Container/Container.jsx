import styles from './styles.module.scss';
import PropTypes from 'prop-types';

export const Container = ({children}) => {
    return (
        <div className={styles.Container}>
            {children}
        </div>
    );
}


Container.propTypes = {
    children: PropTypes.node,
};
