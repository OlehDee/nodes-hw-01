import { writeContacts } from '../utils/writeContacts.js';

export async function removeAllContacts() {
  try {
    await writeContacts([]); 
    console.log('🗑️ Усі контакти було успішно видалено.');
  } catch (error) {
    console.error('❌ Помилка при видаленні контактів:', error.message);
  }
}


removeAllContacts();
