const getGallery = async () => {
    const slugBase = process.env.NEXT_PUBLIC_GALLERY_ID
        if (!slugBase) {
        console.log("gallerySlugBase missing error.")
        return null
    }
    const res = await fetch(`${slugBase}`)
    const gallery = await res.json()
    console.log(gallery)
    return gallery.length > 0? gallery : null;
}

export default getGallery