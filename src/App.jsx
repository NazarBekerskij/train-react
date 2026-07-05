import { Title } from './components/Title/Title';
import { Item } from './Item/Item';
import { List } from './components/List/List';
import './App.css'




const qw = [
  {
    "id": 1,
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "color": "White",
    "mileage": 28000,
    "price": 28500,
    "fuel": "Petrol",
    "automatic": true
  },
  {
    "id": 2,
    "brand": "BMW",
    "model": "X5",
    "year": 2021,
    "color": "Black",
    "mileage": 41000,
    "price": 52000,
    "fuel": "Diesel",
    "automatic": true
  },
  {
    "id": 3,
    "brand": "Audi",
    "model": "A6",
    "year": 2020,
    "color": "Gray",
    "mileage": 58000,
    "price": 37000,
    "fuel": "Diesel",
    "automatic": true
  },
  {
    "id": 4,
    "brand": "Mercedes-Benz",
    "model": "C-Class",
    "year": 2019,
    "color": "Silver",
    "mileage": 67000,
    "price": 34000,
    "fuel": "Petrol",
    "automatic": true
  },
  {
    "id": 5,
    "brand": "Volkswagen",
    "model": "Golf",
    "year": 2018,
    "color": "Blue",
    "mileage": 82000,
    "price": 18500,
    "fuel": "Diesel",
    "automatic": false
  },
  {
    "id": 6,
    "brand": "Honda",
    "model": "Civic",
    "year": 2023,
    "color": "Red",
    "mileage": 12000,
    "price": 29500,
    "fuel": "Petrol",
    "automatic": true
  },
  {
    "id": 7,
    "brand": "Hyundai",
    "model": "Tucson",
    "year": 2022,
    "color": "White",
    "mileage": 25000,
    "price": 31000,
    "fuel": "Hybrid",
    "automatic": true
  },
  {
    "id": 8,
    "brand": "Kia",
    "model": "Sportage",
    "year": 2021,
    "color": "Green",
    "mileage": 39000,
    "price": 27500,
    "fuel": "Diesel",
    "automatic": true
  },
  {
    "id": 9,
    "brand": "Ford",
    "model": "Focus",
    "year": 2017,
    "color": "Black",
    "mileage": 98000,
    "price": 14500,
    "fuel": "Petrol",
    "automatic": false
  },
  {
    "id": 10,
    "brand": "Mazda",
    "model": "CX-5",
    "year": 2020,
    "color": "Blue",
    "mileage": 52000,
    "price": 32000,
    "fuel": "Petrol",
    "automatic": true
  },
  {
    "id": 11,
    "brand": "Nissan",
    "model": "Qashqai",
    "year": 2019,
    "color": "Gray",
    "mileage": 64000,
    "price": 23500,
    "fuel": "Diesel",
    "automatic": true
  },
  {
    "id": 12,
    "brand": "Skoda",
    "model": "Octavia",
    "year": 2021,
    "color": "White",
    "mileage": 36000,
    "price": 25500,
    "fuel": "Petrol",
    "automatic": false
  },
  {
    "id": 13,
    "brand": "Volvo",
    "model": "XC60",
    "year": 2022,
    "color": "Black",
    "mileage": 19000,
    "price": 49500,
    "fuel": "Hybrid",
    "automatic": true
  },
  {
    "id": 14,
    "brand": "Tesla",
    "model": "Model 3",
    "year": 2023,
    "color": "White",
    "mileage": 9000,
    "price": 46000,
    "fuel": "Electric",
    "automatic": true
  },
  {
    "id": 15,
    "brand": "Renault",
    "model": "Megane",
    "year": 2018,
    "color": "Silver",
    "mileage": 87000,
    "price": 16500,
    "fuel": "Diesel",
    "automatic": false
  },
  {
    "id": 16,
    "brand": "Peugeot",
    "model": "3008",
    "year": 2020,
    "color": "Orange",
    "mileage": 47000,
    "price": 26500,
    "fuel": "Petrol",
    "automatic": true
  },
  {
    "id": 17,
    "brand": "Chevrolet",
    "model": "Malibu",
    "year": 2019,
    "color": "Blue",
    "mileage": 61000,
    "price": 21000,
    "fuel": "Petrol",
    "automatic": true
  },
  {
    "id": 18,
    "brand": "Subaru",
    "model": "Outback",
    "year": 2022,
    "color": "Green",
    "mileage": 23000,
    "price": 38500,
    "fuel": "Petrol",
    "automatic": true
  },
  {
    "id": 19,
    "brand": "Lexus",
    "model": "RX 350",
    "year": 2021,
    "color": "Black",
    "mileage": 33000,
    "price": 56500,
    "fuel": "Hybrid",
    "automatic": true
  },
  {
    "id": 20,
    "brand": "Porsche",
    "model": "Cayenne",
    "year": 2023,
    "color": "Gray",
    "mileage": 11000,
    "price": 92000,
    "fuel": "Petrol",
    "automatic": true
  }
]


function App() {

  return (
    <>
    <Title text="Заголовок"/>
    <List cars={qw}/>
    </>
  )
}

export default App
