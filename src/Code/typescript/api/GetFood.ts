import { Food } from "../types";

async function getFood(id: number | number[]) {
    /* or null cuz we need something to put when fail */
    const slugBase = process.env.NEXT_PUBLIC_WP_FOODS_URL;
    if (!slugBase) {
        console.log("slugBase missing error.")
        return null
    }

    let queryParam = "";
    if (Array.isArray(id)) {
        // access Array to use isArray(thing we wanna check if it an array)
        // it like using Math.random()
        queryParam = id.map(tagId => `food_tag[]=${tagId}`).join("&");
        // it might look incomplete but it .map so
        // example: we enter 11,12 
        // it map into "food_tag[]=11" and "food_tag[]=12"
        // then we stitch them together into a single string using .join 
        // final =  "food_tag[]=11&food_tag[]=12"
    } else {
        queryParam = `food_tag=${id}`;
    }

    const res = await fetch(`${slugBase}&${queryParam}`, { cache: 'no-store' })
    if (!res.ok) return null
    const data = await res.json()
    console.log(data)
    return data.length > 0? data : null;
}
export default getFood