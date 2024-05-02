import { CollectionConfig } from "payload/types";

export type CategoryType = {
  name: string;
};

const Category: CollectionConfig = {
  slug: "category",
  labels: {
    singular: "Category",
    plural: "Categories",
  },
  timestamps: false,
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: (): boolean => true,
  },
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
      unique: true,
      index: true,
    },
  ],
};

export default Category;
