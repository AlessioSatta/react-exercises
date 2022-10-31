import { useMemo } from 'react';

export function FilteredList() {
    const users = [
        {
            name: 'Alessio',
            id: 1,
            age: 18
        },
        {
            name: 'Paolo',
            id: 2,
            age: 17
        }
    ]
    
    const lista = useMemo(() => {
        return users.filter((user) => user.age > 17)
    }, [users])

    return (
        <div>
            {lista.map((user) => {
                return <div>Nome: {user.name}, id: {user.id}, età: {user.age}</div>
            })}
        </div>
    )
}