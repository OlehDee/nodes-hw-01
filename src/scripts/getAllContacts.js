import { readContacts } from '../utils/readContacts.js';

export async function getAllContacts() {
  try {
    const contacts = await readContacts();
    return contacts;
  } catch (error) {
    console.error('❌ Помилка при зчитуванні контактів:', error.message);
    return [];
  }
}


getAllContacts().then(contacts => {
  console.log('✅ Контакти з бази даних:');
  console.log(contacts);
});
