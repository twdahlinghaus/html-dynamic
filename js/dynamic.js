let names = [
    "Bryan", "Celina", "Lance", "Andrea", "Jonathan", "Tyler", "Chaz",
    "Dustin", "Pete", "Tom", "Will", "Daemon", "Jada", "Parker"
];
const addname = () => {
    let nameCtrl = document.getElementById("newname");
    let name = nameCtrl.value;
    names.push(name);
    loadDiv();
}
const loadDiv = () => {
    let divCtrl = document.getElementById("ps");
    divCtrl.innerHTML = "";
    for(let name of names) {
        let p = `<p>${name}</p>`;
        divCtrl.innerHTML += p;
    }
}