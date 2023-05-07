import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
const putDb = async (content) => {
  openDB('jate', 1).then((db) => {
    const tx = db.transaction('jate', 'readwrite');
    tx.objectStore('jate').put(content);
    return tx.complete;
  });

  console.error('putDb not implemented');
};

// TODO: Add logic for a method that gets all the content from the database
const getDb = async () => {
  openDB('jate', 1).then((db) => {
    const tx = db.transaction('jate', 'readonly');
    tx.objectStore('jate').getAll();
    return tx.complete;
  });
  console.error('getDb not implemented');
};

initdb();

export { putDb, getDb };
