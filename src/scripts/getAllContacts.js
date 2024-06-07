import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const getAllContacts = async () => {
    try {
        // читаємо файл db.json
        const data = await fs.readFile(PATH_DB, 'utf-8');
        // парсимо рядок у масив
        let contacts = JSON.parse(data);
        // повертаємо
        return contacts;
    } catch (error) {
        console.error('Error reading contacts:', error);
    }
};

console.log(await getAllContacts());
