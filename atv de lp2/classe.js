function MyClasse(value) {
    var atributo = value;

    this.getAtributo = function () {
        return atributo;
    };
}

function document_OnLoad() {
    MyClasse = new MyClasse('teste');

    alert(oMyClasse.getAtributo());
}