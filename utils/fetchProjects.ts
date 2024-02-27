// import { sanityClient } from "../sanity/lib/client";
// import { Project } from "../typings";

// export const fetchProjects = async () => {
//     const res = await sanityClient.fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getProjects`);
//     const data = await res.json();
//     const projects: Project[] = data.projects;

//     //console.log("fetching", projects);

//     return projects;
// };
import { sanityClient } from "../sanity/lib/client";
import { Experience, Project } from "../typings";
import { groq } from "next-sanity";

const query = groq`
    *[_type == 'project'] {
      ...,
      technologies[]->
    }
`;

export const fetchProjects = async() => {
    const res = await sanityClient.fetch(query)

    const projects: Project[] = await sanityClient.fetch(query);

    return projects 

    // console.log('fetching', projects);

    return projects;
}