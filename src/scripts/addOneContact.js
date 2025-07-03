import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js'; 

export async function addOneContact() {
  try {
    const contacts = await readContacts(); 
    const newContact = createFakeContact();

    contacts.push(newContact); 
    await writeContacts(contacts); 

    console.log('✅ Додано контакт:');
    console.log(newContact);
  } catch (error) {
    console.error('❌ Помилка при додаванні контакту:', error.message);
  }
}


addOneContact();
