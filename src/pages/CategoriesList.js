import { useParams } from "react-router-dom"
import Articles from "../components/Articles"
import data from '../data.json'

export function CategoriesList() {
    const { posts } = data
    const { currentCategory } = useParams()
    let categories = []
    posts.forEach(post => {
        if (categories.includes(post.category)) { return null }
        return categories.push(post.category)
    })
    // const context = useOutletContext()

    function renderList() {
        if (currentCategory && categories.includes(currentCategory)) {
            const selectedPosts = posts.filter(({ category }) => category === currentCategory)
            return (
                <Articles items={selectedPosts} />
            )
        }
        return (
            <div style={{ textAlign: 'center' }}>
                <h2 style={{ paddingTop: '30px' }}>Something went wrong!</h2>
                <p>Searched category doesn't exist</p>
            </div>
        )
    }
    return (
        renderList()

        // <div>{context.hello}</div>
    )
}