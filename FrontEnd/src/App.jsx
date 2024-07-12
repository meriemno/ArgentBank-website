import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import SignIn from './pages/signIn/SignIn.jsx';
import Profile from './pages/user/Profile.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loginSuccess, logout } from './store/userSlice';
import { useNavigate } from 'react-router-dom';


function App() {
    const dispatch = useDispatch();
    
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  
    useEffect(() => {
      // Récupération du token et des informations utilisateur depuis localStorage ou sessionStorage
      const token = localStorage.getItem('token') || sessionStorage.getItem('token');
      const userInfo = localStorage.getItem('userInfo') || sessionStorage.getItem('userInfo');
  
      // Si le token et les informations utilisateur existent, dispatch de l'action loginSuccess
      if (token && userInfo) {
        dispatch(loginSuccess({ token, userInfo: JSON.parse(userInfo) }));
      } else {
        // Rediriger l'utilisateur vers la page de connexion s'il n'est pas authentifié
        dispatch(logout());
      }
  
      // Écouteur pour l'événement de déconnexion
      const handleStorageChange = (event) => {
        if (event.key === 'logout') {
          dispatch(logout());
          
        }
      };
  
      window.addEventListener('storage', handleStorageChange);
  
      return () => {
        window.removeEventListener('storage', handleStorageChange);
      };
    }, [dispatch]);
  
    if (!isAuthenticated) {
       dispatch(logout());
        
    }
  




    return (
        
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Home />} />
                    <Route path="/SignIn" element={<SignIn />} />
                    <Route path="/Profile" element={<Profile />} />



                </Routes>
            </BrowserRouter>
       
    );
}

export default App;