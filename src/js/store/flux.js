const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			favorites: [],
			imgPer: [
				{
					name: "Luke Skywalker",
					url: "https://images-na.ssl-images-amazon.com/images/I/51-MdPk6GtL._AC_SX425_.jpg"
				},
				{ name: "C-3PO", url: "https://m.media-amazon.com/images/I/710iMuQqtgL.jpg" },
				{ name: "R2-D2", url: "https://m.media-amazon.com/images/I/71rQhQHLY2L._AC_SS450_.jpg" },
				{
					name: "Darth Vader",
					url: "https://images-na.ssl-images-amazon.com/images/I/8193tTp5TsL._AC_SX425_.jpg"
				}
			],

			imgPlanetas: [
				{
					planet: "Tatooine",
					url: "https://cdn.rebrickable.com/media/thumbs/mocs/moc-26468.jpg/1000x800.jpg?1607352259.4214168"
				},
				{
					planet: "Alderaan",
					url:
						"https://scontent.fsyq1-1.fna.fbcdn.net/v/t1.6435-9/67653455_1635120009956169_4566421435404255232_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=730e14&_nc_ohc=gIuvHZu_2tcAX9BtSIJ&_nc_ht=scontent.fsyq1-1.fna&oh=595b188a558793136ddaf31fb32cd18b&oe=60920383"
				},
				{
					planet: "Yavin IV",
					url: "https://i.pinimg.com/originals/74/db/5e/74db5e519f50e2a400d0cdac3b3153d9.jpg"
				},
				{ planet: "Hoth", url: "https://i.ytimg.com/vi/s0-wgV9ZjU4/maxresdefault.jpg" },
				{
					planet: "Dagobah",
					url:
						"https://www.lego.com/cdn/cs/set/assets/blt884353ea6bae147a/75208.jpg?fit=bounds&format=jpg&quality=80&width=800&height=800&dpr=1"
				}
			]
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
