import { useSelector } from "react-redux"
import ContactForm from "../../components/ContactForm/ContactForm"
import ContactList from "../../components/ContactList/ContactList"
import SearchBox from "../../components/SearchBox/SearchBox"
import { selectIsLoading } from "../../redux/contacts/selectors"
import Loading from "../../components/Loading/Loading"

const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading)
  return (
      <div>
          <ContactForm />
          <SearchBox />
          {isLoading && <Loading/>}
          <ContactList/>
    </div>
  )
}

export default ContactsPage