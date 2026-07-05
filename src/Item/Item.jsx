export function Item ({brand, model, year, color, mileage, price, fuel, automatic}) {
return (
    <li>
          <p>{brand}</p>
          <p>{model}</p>
          <p>{year}</p>
          <p>{color}</p>
          <p>{mileage}</p>
          <p>{price}</p>
          <p>{fuel}</p>
          <p>{automatic? "автомат" : "механіка"}</p>
        </li>
)
}





































// export function Item ({name, age, city, email, isActive, salary}) {
// return (
//         <li>
//             <p>{name}</p>
//             <p>{age}</p>
//             <p>{city}</p>
//             <p>{email}</p>
//             <p>{isActive? "активний" : "не активний"}</p>
//             <p>{salary}</p>
//           </li>
// )
// }