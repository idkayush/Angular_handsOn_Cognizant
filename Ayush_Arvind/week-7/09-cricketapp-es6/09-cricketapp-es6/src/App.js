import ListOfPlayers from "./ListOfPlayers";
import IndianPlayers from "./IndianPlayers";

function App() {
    const flag = true;
    return flag ? <ListOfPlayers /> : <IndianPlayers />;
}

export default App;
