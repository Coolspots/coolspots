import Airtable from 'airtable';

// Authenticate
Airtable.configure({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_KEY,
});

// Initialize a base
const base = Airtable.base(process.env.NEXT_PUBLIC_AIRTABLE_BASE);

// Reference a table
const table = base('spots');

// to make record meaningful.
const getMinifiedItem = (record) => {
  return {
    id: record.id,
    fields: record.fields,
  };
};
const minifyItems = (records) => records.map((record) => getMinifiedItem(record));

export { table, minifyItems, getMinifiedItem };
