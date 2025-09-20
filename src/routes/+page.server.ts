import { google } from 'googleapis';
import {
	TYPE,
	PROJECT_ID,
	PRIVATE_KEY_ID,
	PRIVATE_KEY,
	CLIENT_EMAIL,
	GOOGLE_SHEETS_ID
} from '$env/static/private';
import { fail } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name: FormDataEntryValue | null = data.get('Name');
		const alc = data.get('alc');
		const mixers = data.get('Mixers');

		function getRandomInt(max: number) {
			return Math.floor(Math.random() * max);
		}

		if (!name) {
			return fail(400, { name, incorrect: true });
		} else if (!alc) {
			return fail(400, { alc, incorrect: true });
		} else if (!mixers) {
			return fail(400, { mixers, incorrect: true });
		}
		let allCostumes = [
			'Traffic Cone',
			'Ali G',
			'Barbie',
			'Anything',
			'Retard',
			'Sardar',
			'DJ Khalid',
			'Bad Superhero',
			'Night suit',
			'Captain Underpants',
			'Drag Queen',
			'Mario',
			'School Uniform',
			'Harley Quinn',
			'Irish Square Dancer',
			'Horny Pervert'
		];

		const glAuth = await google.auth.getClient({
			projectId: PROJECT_ID,
			credentials: {
				type: TYPE,
				project_id: PROJECT_ID,
				private_key_id: PRIVATE_KEY_ID,
				private_key: PRIVATE_KEY.replace(/\\n/g, '\n'),
				client_email: CLIENT_EMAIL,
				universe_domain: 'googleapis.com'
			},
			scopes: ['https://www.googleapis.com/auth/spreadsheets']
		});

		const sheets = google.sheets({ version: 'v4', auth: glAuth });

		let costume;
		if (name === 'kush' || name === 'kushh' || name === 'Kushh' || name === 'Kush') {
			costume = 'Slutty French Maid';
		} else if (name === 'parv' || name === 'Parv' || name === 'Parvatesh' || name === 'parvatesh') {
			costume = 'Slutty French Maid';
		} else {
			costume = allCostumes[getRandomInt(allCostumes.length - 1)];
		}

		await sheets.spreadsheets.values.append({
			spreadsheetId: GOOGLE_SHEETS_ID,
			range: 'Sheet1',
			valueInputOption: 'USER_ENTERED',
			requestBody: { values: [[name, alc, mixers, costume]] }
		});
		return { success: true, costume: costume };
	}
};
