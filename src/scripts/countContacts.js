import { readContacts } from '../utils/readContacts.js';

export async function countContacts() {
  try {
    const contacts = await readContacts();
    const count = contacts.length;

    console.log(`✅ Кількість контактів у базі: ${count}`);
    return count;
  } catch (error) {
    console.error('❌ Помилка при підрахунку контактів:', error.message);
    return 0;
  }
}


countContacts();
