
import sanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url'
const client = sanityClient({
    projectId:'fi7bjyej',
    dataset:'production',
    useCdn: true,
    apiVersion:'2022-08-30',
});

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
// Run this to add exception for localhost 3000 cors policy
// sanity cors add http://localhost:3000
export default client;