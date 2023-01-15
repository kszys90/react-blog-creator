// import Radio from './Radio'
import PagesNavContainer from "./PagesNavContainer"
import PagesNavButton from "./PagesNavButton"
import PagesNavPage from "./PagesNavPage"
import PagesNavSeparator from "./PagesNavSeparator"


export default Object.assign(PagesNavContainer, {
    NavButton: PagesNavButton,
    PageButton: PagesNavPage,
    SeparatorButton: PagesNavSeparator
})