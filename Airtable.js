const Airtable = require("airtable");

// Authenticate
Airtable.configure({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_KEY,
});

// Initialize a base
const base = Airtable.base(process.env.NEXT_PUBLIC_AIRTABLE_BASE);

// Reference a table
const table = base("spots");

const minifyItems = (records) =>
  records.map((record) => getMinifiedItem(record));

// to make record meaningful.
const getMinifiedItem = (record) => {
  return {
    id: record.id,
    fields: record.fields,
  };
};

export { table, minifyItems, getMinifiedItem };
