import fs from 'node:fs/promises';
import path from 'node:path';

const PATH_DB = path.join(process.cwd(), 'src', 'db', 'db.json');

export async function writeContacts(contacts) {
  try {
    const json = JSON.stringify(contacts, null, 2);
    await fs.writeFile(PATH_DB, json, 'utf-8');
  } catch (error) {
    console.error('❌ Помилка при записі контактів:', error.message);
    throw error;
  }
}
