import fs from 'node:fs/promises';
import path from 'node:path';

const PATH_DB = path.join(process.cwd(), 'src', 'db', 'db.json');

export async function readContacts() {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('❌ Помилка при зчитуванні контактів:', error.message);
    throw error;
  }
}

