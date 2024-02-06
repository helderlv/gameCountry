(async()=>{try{let r=await fetch("https://restcountries.com/v3.1/all");if(!r.ok)throw Error("Erreur lors de la récupération des données");let e=await r.json();console.log(e)}catch(r){console.error("Une erreur est survenue:",r)}})();
//# sourceMappingURL=index.6820e217.js.map
