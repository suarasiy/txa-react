// IMPORT: import in index.tsx
import ReactDOM from 'react-dom';
// import GuestList from './state/GuestList';
// import UserSearch from './state/UserSearch';
// import EventComp from './events/EventComp';
import UserSearch from './refs/UserSearch';


// CURRENT: const app index.tsx
const App = () => {
    return (
        <div>
            {/* <GuestList /> */}
            {/* <UserSearch /> */}
            {/* <EventComp /> */}
            <UserSearch />
        </div>
    )
};

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);