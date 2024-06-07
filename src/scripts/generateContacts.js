import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';

const generateContacts = async (number) => {
    try {
        // читаємо існуючий файл db.json
        const data = await fs.readFile(PATH_DB, 'utf-8');
        let contacts = JSON.parse(data);

        // generate new contacts and push to array
        for (let i = 0; i < number; i++) {
            contacts.push(createFakeContact());
        }

        // записуємо оновлений масив до db.json
        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
        console.log(`Successfully added ${number} contacts`)
    } catch (error) {
        console.error('Error generating contacts:', error);
    }
};

await generateContacts(5);


