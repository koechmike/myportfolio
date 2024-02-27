// import { sanityClient } from "../sanity/lib/client";
// import { Social } from "../typings";

// export const fetchSocials = async () => {
//     const res = await sanityClient.fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getSocials`);
//     const data = await res.json();
//     const socials: Social[] = data.socials;

//     //console.log("fetching", socials);

//     return socials;
// };
import { groq } from "next-sanity";
import { Social } from "../typings";
import { sanityClient } from "../sanity/lib/client";

const query = groq`
    *[_type == 'social']
`;

export const fetchSocials = async () => {
  const res = await sanityClient.fetch(query)

    const socials: Social[] = await sanityClient.fetch(query);

    return socials
};
