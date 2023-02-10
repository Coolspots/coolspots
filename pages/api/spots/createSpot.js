import { table, getMinifiedItem } from '../../../Airtable';

export default async (req, res) => {
  // TODO make it work
  const { item } = req.body;
  try {
    const newRecords = await table.create([{ fields: { item } }]);
    res.status(200).json(getMinifiedItem(newRecords[0]));
  } catch (error) {
    res.status(500).json({ msg: 'Something went wrong! 😕' });
  }
};
