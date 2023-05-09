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
  const theDb = await openDB('jate', 1);
  const tx = theDb.transaction('jate', 'readwrite');
  const storedTx = tx.objectStore('jate');
  const request = storedTx.put({ id: 1, value: content });
  const result = await request;
  result ? console.log('data added') : console.log('no data');
};

// TODO: Add logic for a method that gets all the content from the database
const getDb = async () => {
  const theDb = await openDB('jate', 1);
  const tx = theDb.transaction('jate', 'readonly');
  const storedTx = tx.objectStore('jate');
  const request = storedTx.get(1);
  const result = await request;
  result ? console.log('data acquired') : console.log('no data');
};

initdb();

export { putDb, getDb };
