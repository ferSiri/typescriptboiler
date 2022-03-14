import React, {useEffect} from 'react';
import axios from 'axios';

const App : React.FC = () => {

    async function getUser() {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/users', {headers: {'Content-Type': 'application/json'}});
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      }

    useEffect(()=>{
        getUser();
    },[])

    return (
            <div>
               Hola mooondo
            </div>
    );

}

export default App;
