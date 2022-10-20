export function Sum(props) {
    return (
        props.numbers === 3 
        ? <h1>Il valore di default è {props.numbers}</h1>
        : <h1>La somma è pari a: {props.numbers.reduce((sum, current) => sum + current, 0)}</h1>
    )
}

Sum.defaultProps = {
    numbers: 3
}