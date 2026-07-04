import { Title } from './components/Title/Title';
import { Item } from './Item/Item';
import { List } from './components/List/List';
import './App.css'




const users = [
  {
    id: 1,
    name: "Іван",
    age: 16,
    city: "Київ",
    email: "ivan@example.com",
    isActive: true,
    salary: 12000,
  },
  {
    id: 2,
    name: "Олена",
    age: 22,
    city: "Львів",
    email: "olena@example.com",
    isActive: false,
    salary: 28000,
  },
  {
    id: 3,
    name: "Андрій",
    age: 35,
    city: "Одеса",
    email: "andrii@example.com",
    isActive: true,
    salary: 55000,
  },
  {
    id: 4,
    name: "Марія",
    age: 48,
    city: "Харків",
    email: "maria@example.com",
    isActive: true,
    salary: 73000,
  },
  {
    id: 5,
    name: "Олександр",
    age: 61,
    city: "Дніпро",
    email: "olex@example.com",
    isActive: false,
    salary: 41000,
  },
  {
    id: 6,
    name: "Катерина",
    age: 27,
    city: "Вінниця",
    email: "katya@example.com",
    isActive: true,
    salary: 36000,
  },
  {
    id: 7,
    name: "Максим",
    age: 19,
    city: "Чернігів",
    email: "maks@example.com",
    isActive: false,
    salary: 18000,
  },
  {
    id: 8,
    name: "Наталія",
    age: 72,
    city: "Полтава",
    email: "nataliya@example.com",
    isActive: true,
    salary: 25000,
  },
];


function App() {

  return (
    <>
    <Title text="Заголовок"/>
      {/* <ul>
        {users.map(({id, name, age, city, email, isActive, salary}) => {
          return <li key={id}>
            <p>{name}</p>
            <p>{age}</p>
            <p>{city}</p>
            <p>{email}</p>
            <p>{isActive}</p>
            <p>{salary}</p>
          </li>
        })}
      </ul> */}


      <List student={users}/>
    </>
  )
}

export default App
