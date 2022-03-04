"use strict";
class User {
    constructor(firstName, lastName, userName, email, password, cpf, contact, isAdmin) {
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
    getFirstName() {
        return this.firstName;
    }
    setFirstName(firstName) {
        this.firstName = firstName;
    }
    getLastName() {
        return this.lastName;
    }
    setLastName(lastName) {
        this.lastName = lastName;
    }
    getUserName() {
        return this.userName;
    }
    setUserName(userName) {
        this.userName = userName;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getPassword() {
        return this.password;
    }
    setPassword(password) {
        this.password = password;
    }
    getCpf() {
        return this.cpf;
    }
    setCpf(cpf) {
        this.cpf = cpf;
    }
    getContact() {
        return this.contact;
    }
    setContact(contact) {
        this.contact = contact;
    }
    getIsAdmin() {
        return this.isAdmin;
    }
    setIsAdmin(isAdmin) {
        this.isAdmin = isAdmin;
    }
}
let u = new User('Renato', 'Pereira', 'shaolin_matador_de_porco', 'renato@mail.com', '1578965456545', '158266986-98', '88998547240', true);
let v = new User('Renato', 'Pereira', 'shaolin_matador_de_porco', 'renato@mail.com', '1578965456545', '158266986-98', '88998547240', true);
console.log(u);
console.log('Primeiro Nome: ' + v.getFirstName());
console.log('Segundo Nome: ' + v.getLastName());
console.log('Nome de Usuário: ' + v.getUserName());
console.log('Email: ' + v.getEmail());
console.log('Senha: ' + v.getPassword());
console.log('CPF: ' + v.getCpf());
console.log('Contato: ' + v.getContact());
console.log('É Administrador: ' + v.getIsAdmin());
