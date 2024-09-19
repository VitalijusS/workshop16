// eslint-disable-next-line react/prop-types
export function Button({ btnClass, text, func }) {
    return (
        <>
            <button className={`btn ${btnClass} btn-sm`} onClick={func}>{text}</button>
        </>
    );
}