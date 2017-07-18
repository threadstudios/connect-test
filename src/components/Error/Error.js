import Inferno from 'inferno';

export default ({className, msg}) => {
    return (
        <div className={["error", className].join(' ')}>
            {msg}
        </div>
    );
}