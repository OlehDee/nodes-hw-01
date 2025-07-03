import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js'; // Переконайся, що ця функція існує

// Головна функція генерації
export async function generateContacts(count) {
  try {
    const existingContacts = await readContacts(); // Зчитуємо наявні
    const newContacts = [];

    for (let i = 0; i < count; i++) {
      newContacts.push(createFakeContact());
    }

    const updatedContacts = [...existingContacts, ...newContacts];
    await writeContacts(updatedContacts);

    console.log(`✅ Додано ${count} контактів. Загальна кількість: ${updatedContacts.length}`);
  } catch (error) {
    console.error('❌ Помилка при генерації контактів:', error.message);
  }
}

// Якщо цей файл викликається напряму з CLI:
const countFromCLI = parseInt(process.argv[2], 10);

if (!isNaN(countFromCLI) && countFromCLI > 0) {
  generateContacts(countFromCLI);
} else {
  console.error('⚠️ Вкажіть кількість контактів як аргумент. Наприклад: npm run generate 5');
}
