// const clientId = 'BkxtyVicQn3tbsFUgIQJAQ'
const apiKey = 'FM3YPuUPhh0r1ILfw6bUPt7sGjmH2jUnwkePeZxdpyvofqaBlnT7hsbO52fzuc0BXhVBlC75nCjrhUO20XKyhryxQCZBhOFgSewaitTtBzMaJusG-6yxcGVVpD--WnYx'

// Using fetch() browser API in this project
// Use fetch pollyfill to support all browsers
// npm install whatwg-fetch --save

let Yelp = {
	search: function(term, location, sortBy) {
		// fetch doesn't work because of CORS restriction
		// CORS Anywhere allows us to bypass these restrictions
		// CORS Anywhere will
		// 1. take requests sent to its API endpoint
		// 2. make requests to Yelp for requesting App (ravenous) with proper CORS permissions
		// 3. return response back to the requesting App
		const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/'
		const yelpBusinessUrl = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`
		const finalUrl = corsAnywhereUrl + yelpBusinessUrl;

		return fetch(finalUrl, { headers: { Authorization: `Bearer ${apiKey}` }}).then(
			response => {
				return response.json()
			},
			networkError => console.log(networkError.message)
		).then(jsonResponse => {
			// console.log(jsonResponse)

			if (jsonResponse.businesses) {
				let updatedBusinesses = jsonResponse.businesses.map(
					business => {
						return {
							id: business.id,
							imageSrc: business.image_url,
							name: business.name,
							address: business.location.address1,
							city: business.location.city,
							state: business.location.state,
							zipCode: business.location.zip_code,
							category: business.categories,
							rating: business.rating,
							reviewCount: business.review_count
						}
					}
				);

				return updatedBusinesses;
			}
		})
	}
};

export default Yelp;