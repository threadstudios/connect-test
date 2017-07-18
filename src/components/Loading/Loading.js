import Inferno from 'inferno';

export default ({className}) => {
    const classNames = ["loading", className].join(" ");
    return (
        <div className={classNames}>
            <svg width="120" className="loader-svg" height="120" viewbox="0 0 1 1">
                <circle strokeWidth="9" fill="transparent" stroke="#EFEFEF" cx="60" cy="60" r="30"></circle>
                <circle className="loader-ring" strokeWidth="9" fill="transparent" stroke="#9e1b32" cx="60" cy="60" r="30"></circle>
            </svg>
        </div>
    );
}