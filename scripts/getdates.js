const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `${today.getFullYear()}`;

let lastMod = document.querySelector("#lastModified");

let oLastModif = new Date(document.lastModified);

lastMod.innerHTML = new Intl.DateTimeFormat(
    "en-US", 
    {
        dateStyle: "short",
        timeStyle: "short"
  }
).format(oLastModif);