import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export async function removeLastContact() {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log('⚠️ Немає контактів для видалення.');
      return;
    }

    const removed = contacts.pop(); 
    await writeContacts(contacts); 

    console.log('🗑️ Видалено останній контакт:');
    console.log(removed);
  } catch (error) {
    console.error('❌ Помилка при видаленні контакту:', error.message);
  }
}


removeLastContact();
