import fetch, { FetchError } from 'node-fetch';

async function main() {
	
	try {
		const response = await fetch('https://httpstat.us/504?sleep=60000', { timeout: 1000 });
		const data = await response.text();
	} catch (error) {
        if(error instanceof FetchError && error.type === 'request-timeout') {
            console.error('timeout');
        }
	}
}

main();