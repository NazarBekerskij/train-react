import { Item } from "../../Item/Item";

export function List ({cars}) {
    return (
        <ul>
            {cars.map(({id, brand, model, year, color, mileage, price, fuel, automatic}) => {
                return <Item key={id} brand={brand} model={model} year={year} color={color} mileage={mileage} price={price} fuel={fuel} automatic={automatic}/>
            })}
        </ul>
    )
}








































// import { Item } from "../../Item/Item"

// export function List ({student}) {
//     return <ul>
//         {student.map(({id, name, age, city, email, isActive, salary}) => {
//             return (
//                 <Item key={id} name={name} age={age} city={city} email={email} isActive={isActive} salary={salary}/>
//             )
//         })}
//     </ul>
// }