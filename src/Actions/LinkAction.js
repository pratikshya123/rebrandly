export function listLinks() {
	return {
		type: 'LIST_LINKS',
		payload:[{
			id:123,
			shortLink: 'app.ap',
			destination:'apple.com',
			title:'Apple'
		},
		{
			id:12,
			shortLink: 'ap.ap',
			destination: 'apple.com',
			title: 'Apple 1234'
		
		}]
	}
}
 