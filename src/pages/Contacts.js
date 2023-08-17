import Form from 'components/Form';
import Filter from 'components/FilterName/FilterName';
import ListUpdate from 'components/ListUpdate';


export default function Contacts() {
  
    return (
        <div>
        <h1>Contacts</h1>
            <Form />
            <Filter/>
        <ListUpdate/>
            </div>
    );
}