import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const countContacts = async () => {
    try {
        // читаємо файл db.json
        const data = await fs.readFile(PATH_DB, 'utf-8');
        // парсимо рядок у масив
        let contacts = JSON.parse(data);
        // повертаємо довжину масиву
        return contacts.length;
    } catch (error) {
        console.error('Error counting contacts:', error);
        return 0
    }
};

console.log(await countContacts());
