export function Sum(props) {
    return (
        <h1>La somma è pari a: {props.numbers.reduce((sum, current) => sum + current, 0)}</h1>
    )
}