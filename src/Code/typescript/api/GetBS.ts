import { Food } from "../types";

async function getBS() {
    /* or null cuz we need something to put when fail */
    const slugBase = process.env.NEXT_PUBLIC_WP_FOODS_URL;
    if (!slugBase) {
        console.log("slugBase missing error.")
        return null
    }
    const res = await fetch(`${slugBase}`, { cache: 'no-store' })
    if (!res.ok) return null
    const data = await res.json()
    console.log(data)
    return data.length > 0? data : null;
}
export default getBS 