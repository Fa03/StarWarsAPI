const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			favorites: []
		},
		actions: {
			fetchPeople: async () => {
				const URL = "https://swapi.dev/api/people/";
				const Propiedades = {
					method: "Get",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(URL, Propiedades);
				const json = await response.json();

				console.log("DATA>>", json);
				setStore({ characters: json.results });
			},

			fetchPlanets: async () => {
				const URL = "https://swapi.dev/api/planets/";
				const Propiedades = {
					method: "Get",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(URL, Propiedades);
				const json = await response.json();

				console.log("DATA>>", json);
				setStore({ planets: json.results });
			},

			setFavorites: name => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, name] });
			},

			deleteFavorite: indice => {
				let store = getStore().favorites;
				setStore({ favorites: [...store.slice(0, indice), ...store.slice(indice + 1)] });
			}
		}
	};
};

export default getState;
