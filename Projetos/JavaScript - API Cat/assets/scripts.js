const BASE_URL = 'https://api.thecatapi.com/v1/images/search';


const getCats = async () => {
	try {
		const response = await fetch(BASE_URL);
		const cats = await response.json();
		console.log(cats)
		return cats[0].url;
	} catch (e) {
		console.log(e.message);
	}
};

const loadImg = async () => {
	document.getElementById('cat').src = `${await getCats()}` ;
};

const btn = document.getElementById('change-cat');
btn.addEventListener('click', loadImg);

window.onload = loadImg();