import { shuffle } from "lodash";
import Country from "./modules/Country";
import Game from "./modules/Game";

const tableauCountry = [];

export const getCountries = async () => {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données');
        }

        const data = await response.json();

        //console.log(data);
        console.log(shuffle(data[1].translations));


    } catch (error) {
        console.error('Une erreur est survenue:', error);
    }

};

// Appel de la fonction getCountries
getCountries();
