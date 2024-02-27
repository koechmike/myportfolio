// import { sanityClient } from "../sanity/lib/client";
// import { PageInfo } from "../typings";

// export const fetchPageInfo = async () => {
//     const res = await sanityClient.fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getPageInfo`);
//     const data = await res.json();
//     const pageInfo: PageInfo = data.pageInfo;

//     //console.log("fetching", pageInfo);

//     return pageInfo;
// };
import { groq } from "next-sanity";
import { PageInfo } from "../typings";
import { sanityClient } from "../sanity/lib/client";

const query = groq`
    *[_type == 'pageInfo'][0]
`;


export const fetchPageInfo = async() => {
    const res = await sanityClient.fetch(query)

    const pageInfo: PageInfo = await sanityClient.fetch(query);

    return pageInfo 

    // console.log('fetching', pageInfo);
}