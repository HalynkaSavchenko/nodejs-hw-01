import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
    try {
        // записуємо порожній масив до db.json
        await fs.writeFile(PATH_DB, JSON.stringify([]));
        console.log('Successfully removed all contacts');
    } catch (error) {
        console.error('Error removing contacts:', error);
    }
};

await removeAllContacts();
