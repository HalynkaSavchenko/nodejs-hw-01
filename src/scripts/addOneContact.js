import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';

export const addOneContact = async () => {
    try {
        // читаємо існуючий файл db.json
        const data = await fs.readFile(PATH_DB, 'utf-8');
        let contacts = JSON.parse(data);

        // generate one contact and push
        const newContact = createFakeContact();
        contacts.push(newContact);

        // записуємо оновлений масив до db.json
        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2))
        console.log('Successfully add one contact:', newContact)
    } catch (error) {
        console.error('Error adding one contact:', error);
    }
};

await addOneContact();
