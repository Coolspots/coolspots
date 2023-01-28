import { table } from '../../../Airtable';

export default async (_req, res) => {
  const query = _req.query;
  try {
    await table.find(query.spotId, (err, record) => {
      if (err) {
        return err;
      }
      res.status(200).json({ spot: record });
    });
  } catch (error) {
    res.status(500).json({ error: `${error} 😕` });
  }
};
