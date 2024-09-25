export default function TabButton({children}) {

    function handleClick() {
        console.log('클릭');
    }

    return (
        <li>
            <button onClick={handleClick}>
                {children}
            </button>
        </li>
    );
}