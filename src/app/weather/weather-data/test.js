
async function getWikiPages() {
    const getPages = await fetch('https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch=canada')
    if (getPages.ok) {
        const data = await getPages.json()
        console.log(JSON.stringify(data, null, 2))
    }
}
getWikiPages()

