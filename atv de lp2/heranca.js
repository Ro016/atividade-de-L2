class Pessoa {
    /**
    * verifica se um número de CPF é valido
    *
    * @param value numero de cpf
    * @returns
    */
    static cpfIsValid (value) {
        return /^\d\.\d\.\d\-\d$/.test(value)
    }
}

console.log(Pessoa.cpfIsValid('999.999.999-99'))
