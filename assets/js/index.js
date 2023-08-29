function verificarInputs() {
    let tutor = document.getElementById("input-tutor").value
    let pet = document.getElementById("input-pet").value
    let especie = document.getElementById("input-especie").value
    let foto = document.getElementById("input-foto").value
    let data = document.getElementById("input-data").value

    if (tutor == '' || pet == '' || especie == '' ||foto == '' || data == '') {
        return true;

    } else {
        return false;

    }
}
function Msg(msg, tipoMsg) {

    let msgDiv = document.getElementById("msg");
    msgDiv.innerHTML = '';

    const msgTela = `
<p class="${tipoMsg}">${msg}</p>
`
    msgDiv.innerHTML = msgTela;

    setTimeout(function () {
        msgDiv.innerHTML = '';
    }, 4000);
}
class Pet {
    constructor(tutor, pet, especie, foto, data){
    this.tutor = tutor
    this.pet = pet
    this.especie = especie
    this.foto = foto
    this.data = data
}}
function comporPet() {
    let tutor = document.getElementById("input-titulo").value
    let pet = document.getElementById("input-pet").value
    let especie = document.getElementById("input-especie").value
    let foto = document.getElementById("input-foto").value
    let data = document.getElementById("input-data").value
    
    }
    class petList {
        constructor() {
            this.petList = [];
        }
        addPet(pet) {
    
            if (getInputs()) {
                enviarMsg("Preencha todos os campos", "erro")
            } else {
                enviarMsg("Pet já cadastrado", "sucesso")
                this.petList.push(pet)
                render()
                cleanInput()
            }
        }
    }
    const petList = new petlist();