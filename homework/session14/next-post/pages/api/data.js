export const data = [
  {
    id: 1,
    slug: "learning-node-js-basic",
    title: "Learning Node JS Basic",
    date: "2021-10-02",
    description: "Node JS is JS based....",
    content: "Node JS content blog",
  },
  {
    id: 2,
    slug: "learning-React-js-basic",
    title: "Learning React JS Basic",
    date: "2021-10-03",
    description: "React JS is JS based....",
    content: "React JS content blog",
  },
  {
    id: 3,
    slug: "learning-Vue-js-basic",
    title: "Learning Vue JS Basic",
    date: "2021-10-04",
    description: "Vue JS is JS based....",
    content: "Vue JS content blog",
  },
];

export let data2 = [];

export function getPostData(slug) {
  return data.filter((newData) => {
    return newData.slug === slug;
  });
}

export function getSlug() {
  const slug = [];
  data.map((newData) => {
    slug.push(newData.slug);
  });
  return slug;
}
