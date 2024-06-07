import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const thanos = async () => {
    try {
        // Читаємо файл db.json
        const data = await fs.readFile(PATH_DB, 'utf-8');
        let contacts = JSON.parse(data);

        // Фільтруємо контакти
        const remainingContacts = contacts.filter(() => Math.random()>0.5);
        
        // Записуємо оновлений масив контактів до db.json
        await fs.writeFile(PATH_DB, JSON.stringify(remainingContacts, null, 2));
        console.log(`Thanos snapped his fingers. ${contacts.length - remainingContacts.length} contacts removed.`)
    } catch (error) {
        console.error('Error performing Thanos snap:', error);
    }
};

await thanos();
