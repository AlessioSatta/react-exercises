// import { ClickCounter } from './ClickCounter';
// import { ClickTracker } from './ClickTracker';
// import { Container } from './Container';
// import { Counter } from './Counter';
// import { DisplayLanguage } from './DisplayLanguage';
// import { GithubUser } from './GithubUser';
// import { GithubUserCustomHook } from './GithubUserCustomHook'
// import { GithubUserList } from './GithubUserList';
// import { Hello } from './Hello';
// import { InterectiveWelcome } from './InteractiveWelcome';
// import { LanguageContext } from './LanguageContext';
// import { Login } from './Login';
// import { Sum } from './Sum';
// import { TodoList } from './TodoList';
// import { UncontrolledLogin } from './UncontrolledLogin';
// import { CounterCustomHook } from './CounterCustomHook'
// import { FilteredList } from './FilteredList';

// const numbers = [1, 3, 5, 7, 9, 11]

// export class App extends React.Component {
//     state = {
//         language: 'English'
//     }

//     handleLanguageChange = (event) => {
//         this.setState({
//             language: event.target.value
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <select value={this.state.language} onChange={this.handleLanguageChange}>
//                     <option value='English'>English</option>
//                     <option value='Italiano'>Italiano</option>
//                 </select>
//                 <LanguageContext.Provider value={this.state.language}>
//                     <Container title='Container component'>
//                         <DisplayLanguage language={this.state.language} />
//                         <Hello />
//                         <InterectiveWelcome />
//                         <Counter initialValue={0} incrementAmount={1} incrementInterval={1000} />
//                         <ClickCounter />
//                         <ClickTracker />
//                         <Login />
//                         <UncontrolledLogin />
//                         <TodoList render={(item, handleRemoveItem) => item.map((item, index) => <li key={index + item}>{item}<button onClick={() => handleRemoveItem(index)}>Remove</button></li>)} />
//                         <Sum />
//                         <GithubUser username='AlessioSatta'/>
//                         <GithubUserList />
//                         <CounterCustomHook />
//                         <GithubUserCustomHook username='AlessioSatta' />
//                         <FilteredList />
//                     </Container>
//                 </LanguageContext.Provider>
//             </div>
//         )
//     }
// }

import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import ShowGithubUser from "./ShowGithubUser";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome name="Alessio" />} />
      <Route
        path="/counter"
        element={
          <Counter
            initialValue={0}
            incrementAmount={1}
            incrementInterval={1000}
          />
        }
      />
      <Route path="/username/:username" element={<ShowGithubUser />} />
    </Routes>
  );
}
