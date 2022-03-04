interface UserProps {
    firstName: string
    lastName: string
    userName: string
    email: string
    password: string
    cpf: string
    contact: string
    isAdmin: boolean
}

class User implements UserProps { 
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    cpf: string;
    contact: string;
    isAdmin: boolean;

    constructor (
    firstName: string,
    lastName: string,
    userName: string,
    email: string,
    password: string,
    cpf: string,
    contact: string,
    isAdmin: boolean,
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.cpf = cpf;
        this.contact = contact;
        this.isAdmin = isAdmin;
    }

    // getter & setters

    getFirstName(): string {
        return this.firstName
    }

    setFirstName(firstName: string): void {
        this.firstName = firstName
    }

    getLastName(): string {
        return this.lastName
    }

    setLastName(lastName: string): void {
        this.lastName = lastName
    }

    getUserName(): string {
        return this.userName
    }

    setUserName(userName: string): void {
        this.userName = userName
    }

    getEmail(): string {
        return this.email
    }

    setEmail(email: string): void {
        this.email = email
    }

    getPassword(): string {
        return this.password
    }

    setPassword(password: string): void {
        this.password = password
    }

    getCpf(): string {
        return this.cpf
    }

    setCpf(cpf: string): void {
        this.cpf = cpf
    }

    getContact(): string {
        return this.contact
    }

    setContact(contact: string): void {
        this.contact = contact
    }

    getIsAdmin(): boolean{
        return this.isAdmin
    }

    setIsAdmin(isAdmin: boolean): void {
        this.isAdmin = isAdmin
    }
} 

let u: UserProps = new User('Renato', 'Pereira', 'shaolin_matador_de_porco', 'renato@mail.com', '1578965456545', '158266986-98', '88998547240', true )
let v: User = new User('Renato', 'Pereira', 'shaolin_matador_de_porco', 'renato@mail.com', '1578965456545', '158266986-98', '88998547240', true )

console.log(u)
console.log('Primeiro Nome: ' + v.getFirstName())
console.log('Segundo Nome: ' + v.getLastName())
console.log('Nome de Usuário: ' + v.getUserName())
console.log('Email: ' + v.getEmail())
console.log('Senha: ' + v.getPassword())
console.log('CPF: ' + v.getCpf())
console.log('Contato: ' + v.getContact())
console.log('É Administrador: ' + v.getIsAdmin())









