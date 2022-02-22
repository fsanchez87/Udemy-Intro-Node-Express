// VARIABLES Y CONSTANTES
let variable = "variable";
const constante = 1234;

// TIPOS DE DATOS MAS COMUNES
let age: number = 35;
const apiKey: string = "1234";
let isActive: boolean = false;

const numbers: Array<number> = [];
const numbers2: number[] = [];
const names: string[] = ["John", "Jane"];

// OBJETOS
let user1: {
  name: string;
  lastName: string;
  age: number;
} = {
  name: "John",
  lastName: "Jane",
  age: 35,
};

// TIPOS DE DATOS PERSONALIZADOS
type User = {
  name: string;
  lastName: string;
  age: number;
};

let user2: User = {
  name: "John",
  lastName: "Jane",
  age: 35,
};

// CLASES
abstract class Animal {
  protected name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  toString(): string {
    return `Nombre: ${this.name}, edad: ${this.age}`;
  }
}

// CLASES. Herencia
class Mamifero extends Animal {}

class Bird extends Animal {
  canFly: boolean;

  constructor(data: { name: string; age: number; canFly: boolean }) {
    const { name, age, canFly } = data;
    super(name, age);
    this.canFly = canFly;
  }

  fly(): void {
    console.log(`${this.name} can fly ${this.canFly}`);
  }
}

const dog = new Mamifero("Nero", 10);
const condor = new Bird({ name: "Condor", age: 10, canFly: true });
condor.fly();


// GETTERS Y SEETERS
class Person {
  readonly dni: string;
  private _name: string;

  constructor(data: { name: string; dni: string }) {
    this.dni = data.dni;
    this._name = data.name;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    if(newName.trim().length === 0){
      throw new Error("Invalid name")
    }
    this._name = newName
  }

  getDni(): string {
    return this.dni;
  }


}
const person1 = new Person({ name: "John", dni: "1234" });
console.log(person1.)


// PROPIEDADES Y MÉTODOS ESTÁTICOS
class AppConfig {
  static apiKey: string = "1234"

  static getData(): string{
    return "1234";
  }
}
AppConfig.apiKey;
AppConfig.getData;


// PROPIEDADES Y PARÁMETROS OPCIONALES

class Vehicle{
  model: string;
  year: number;

  constructor(data:{model: string; year: number}){
    const {model, year} = data
    this.model = model;
    this.year = year;
  }
}

class Employee {
  id: number;
  name: string;
  vehicle?: Vehicle;

  constructor(data:{id: number; name: string, vehicle?:Vehicle}){
    const {id, name, vehicle} = data;
    this.id = id;
    this.name = name;
    this.vehicle = vehicle;
  }
} 
const seat = new Vehicle({model:"león", year:2020})
const employee1 = new Employee({id: 123, name:"John"})

const getPice = (normalPrice: number, discount: number = 0): number => normalPrice - normalPrice * discount /100;

// ANY
let user;


// INTERFACES
// Para definir la estructura de las clases
interface Usuario {
  name: string;
  age: number;
  address?:string
}
interface Empleado extends Usuario{
  job: string;
}
let usuario1: Empleado = {
  name: "John",
  age: 21,
  job:"Dev"
}

interface Authentication{
  apiHost?: string;
  login(email: string, password: number):string | null;

  register(data:{email: string, password: number}):boolean
}

class AuthenticationClient implements Authentication{
  
  apiHost?: string;  

  login(email: string, password: number): string | null {
    return null;
  }

  register(data: { email: string; password: number; }): boolean {
    return false 
  }  
}


// Not-null Assertion Operator!
const checkCredentials =(email: string, password: string): string => {
  return "login ok";
}

const login = (data: {email: string, password?: string, loginType: string}): string => {
  const {email, password, loginType} = data;

  switch (loginType) {
    case "password":
      return checkCredentials(email, password!);

    case "facebook":
      return "login ok";

    case "google":
      return "login ok";
  
    default:
      return "invalid login";
  }
}

// ASYNC / AWAIT /
const sleep = (seconds: number): Promise<void> => {
  return new Promise<void>((res, rej)=>{
    setTimeout(() => {
      res
    }, seconds * 1000);
  })
}

const run = async(): Promise<void> =>{
  await sleep(2);
  console.log("hola async")
}
run()


// ENUMS
enum FileType {
  video = ".mp4", image = ".jpg", audio =".mp3"
}

const parseData = (url: string) =>{

  const type:FileType = url.substring(0, 10) as FileType

  switch (type) {
    case FileType.audio:
      
      break;
  
    default:
      break;
  }
}