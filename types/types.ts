export type SpotFields = {
  city: string;
  mapsLink: string;
  description: string;
  name: string;
  tags: string[];
};

export type Spot = {
  id: string;
  fields: SpotFields;
};

export type SpotListProps = {
  spots: Spot[];
};
