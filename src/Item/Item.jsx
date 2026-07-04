export function Item ({name, age, city, email, isActive, salary}) {
return (
        <li>
            <p>{name}</p>
            <p>{age}</p>
            <p>{city}</p>
            <p>{email}</p>
            <p>{isActive? "активний" : "не активний"}</p>
            <p>{salary}</p>
          </li>
)
}