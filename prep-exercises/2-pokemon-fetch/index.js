"use strict";
/*------------------------------------------------------------------------------
 * In this exercise you will practice fetching data from a web API, using
 * `fetch`, promises, async/await and try/catch.
 *
 * Your solution should both work for the "happy" path (using VALID_URL) as
 * well handle the error in the "unhappy" path (when selecting INVALID_URL).
 *
 * You will need to decide which functions need to be made `async` and where
 * `try/catch` blocks should be added.
 *
 * The HTML file already contains the necessary HTML elements.
 *----------------------------------------------------------------------------*/

const VALID_URL = "https://pokeapi.co/api/v2/pokemon/?limit=5";
const INVALID_URL = "https://pokeapi.co/api/v2/pokemons/?limit=5";

function fetchJSON(url) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      resolve(response.json());
    } catch (error) {
      reject(new Error(`${error.message}`));
    }
  });
}

function renderResults(pokemons) {
  const errorElement = document.querySelector("#error");
  errorElement.innerText = "";
  const pokemonsElement = document.querySelector("#json");
  pokemonsElement.innerText = JSON.stringify(pokemons, null, 2);
}

function renderError(err) {
  const pokemonsElement = document.querySelector("#json");
  pokemonsElement.innerText = "";

  const errorElement = document.querySelector("#error");
  errorElement.innerText = err;
}

function main() {
  const button = document.querySelector("#button");
  button.addEventListener("click", () => {
    const option = document.querySelector("#option");
    const url = option.checked ? INVALID_URL : VALID_URL;
    fetchJSON(url)
      .then((resolvedValue) => {
        renderResults(resolvedValue);
      })
      .catch((err) => {
        renderError(err);
      });
  });
}

window.addEventListener("load", main);
