class Country {
    pays;
    drapeau;
    reponses;
    constructor(pays, drapeau, reponses) {
        this.pays = pays;
        this.drapeau = drapeau;
        this.reponses = reponses;
    }

    #getTranslations(data) {

        for (let index = 0; index < data.length; index++) {
            translations.push(mewSet.array(array.map(data[index].translation)));
        }
    }

    #controlereponse(reponses) {

        if (translations.has(reponses)) {
            return true;
        } else {
            return false;
        }

    }

    #getdrapeau() {
        // div user
        const div = document.createElement("div");
        div.classList.add("country");
        div.dataset.present = this.drapeau;
        // contenu du div
        const contenu = `
        <div id="flags">${this.drapeau}</div>
`;
        // insertion du contenu
        div.insertAdjacentHTML("afterbegin", contenu);

        return div;
    }

}

export default Country;