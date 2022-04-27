import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // , Routes, Route
// Auth
import { useAuth0 } from '@auth0/auth0-react';
// redux
import { Provider } from 'react-redux';
import store from './redux/store/store';
// components
import Navbar from './components/navbar/Navbar';
import SignIn from './components/signin/SignIn';
import LogoutButton from './components/signin/Logout';
import Profile from './profile/Profile';
// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/Footer';
import CharactersList from './pages/charactersList/CharactersList';

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div>
          <Navbar />
        </div>
        {isAuthenticated
          ? (
            <Routes>
              <Route path="/" exact element={<CharactersList />} />
              <Route path="/profile" exact element={<Profile />} />
              <Route path="/login" element={<SignIn />} />
              <Route path="/logout" element={<LogoutButton />} />
            </Routes>
          )
          : (

            <SignIn />

          )}

        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
