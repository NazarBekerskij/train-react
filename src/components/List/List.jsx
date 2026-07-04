import { Item } from "../../Item/Item"

export function List ({student}) {
    return <ul>
        {student.map(({id, name, age, city, email, isActive, salary}) => {
            return (
                <Item key={id} name={name} age={age} city={city} email={email} isActive={isActive} salary={salary}/>
            )
        })}
    </ul>
}