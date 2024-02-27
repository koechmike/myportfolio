// import { sanityClient } from "../sanity/lib/client";
// import { Experience } from "../typings";

// export const fetchExperiences = async () => {
//     const res = await sanityClient.fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperiences`);
//     const data = await res.json();
//     const experiences: Experience[] = data.experiences;

//     //console.log("fetching", experiences);

//     return experiences;
// };
import { sanityClient } from "../sanity/lib/client";
import { Experience } from "../typings";
import { groq } from "next-sanity";

const query = groq`
    *[_type == 'experience'] {
      ...,
      technologies[]->
    }
`;

export const fetchExperiences = async() => {
    const res = await sanityClient.fetch(query)

    const experiences: Experience[] = await sanityClient.fetch(query);

    return experiences 

    // console.log('fetching', experiences);
}