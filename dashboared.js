import { signOut } from 'firebase/auth';
import '../App.css';
import { auth } from '../firebase/firebaseConfig';
import { useHistory } from 'react-router-dom';

function Dashboard() {
    const history = useHistory();
    const logOut = () => {
        signOut(auth).then(() => {
            console.log("Log Out");
            history.push('/')
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <div className="App">
            <h1>Dashboard</h1>
            <button onClick={logOut}>Log Out</button>
        </div>
    );
}

export default Dashboard;
