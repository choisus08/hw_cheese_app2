import { baseUrl } from "./base_url";

export const cheesesLoader = async () => {
    // make call to backend index route
    const response = await fetch(`${baseUrl}/cheese`);
    // convert response into js object
    const cheeses = await response.json();
    // return list of cheeses
    return cheeses
};


export const cheeseLoader = async ({params}) => {
    // get the id param from params object
    const id = params.id;
    // make call to backend show route
    const response = await fetch(`${baseUrl}/cheese/${id}`);
    // convert response into js object
    const cheese = await response.json();
    // return cheese
     return cheese
};