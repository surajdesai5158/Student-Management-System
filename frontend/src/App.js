
import './App.css';
import {Routes,Route} from 'react-router-dom' ;
import UserLayout from "./components/userLayout/UserLayout";
import UserHome from './components/userLayout/UserHome';
import GuestLayout from './components/guestLayout/GuestLayout';
import GuestHome from './components/guestLayout/GuestHome';

import StudentRegister from './components/guestLayout/StudentRegister';
import AdminRegister from './components/guestLayout/AdminRegister';
import StudentLogin from './components/guestLayout/StudentLogin';
import AdminLogin from './components/guestLayout/AdminLogin';
import GuestContact from './components/guestLayout/GuestContact';
import GuestAbout from './components/guestLayout/GuestAbout';
import UserStudent from './components/userLayout/UserStudent';
import UserCourses from './components/userLayout/UserCourses';
import AdminLayout from './components/adminLayout/AdminLayout';
import AdminCourses from './components/adminLayout/AdminCourses';
import AdminResults from './components/adminLayout/AdminResults';
import UserResults from './components/userLayout/UserResults';
import UserContact from './components/userLayout/UserContact';
import AdminContact from './components/adminLayout/AdminContact';
import AdminDashboard from './components/adminLayout/AdminDashboard';
import AdminStudents from './components/adminLayout/AdminStudents';
import AdminProfile from './components/adminLayout/AdminProfile';
import ProtectedRoute from './routes/ProtectedRoute';
import AdminFaculty from './components/adminLayout/AdminFaculty';
import UserFaculty from './components/userLayout/UserFaculty';




function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<GuestLayout/>}>
      
         <Route index element={<GuestHome/>}/>
      <Route path='/home' element={<GuestHome/>} />
      <Route path='/studentRegister' element={<StudentRegister/>}/>
      <Route path='/adminRegister' element={<AdminRegister/>}/>
      <Route path='/contact' element={<GuestContact/>}/>
      <Route path='/about' element={<GuestAbout/>}/>

      <Route path='/studentLogin' element={<StudentLogin/>}/>
       
      <Route path='/adminLogin' element={<AdminLogin/>}/>

      
      </Route>




      
     <Route path='/user' element={
      <ProtectedRoute role="user">
        
        <UserLayout/>
      </ProtectedRoute>}>
      
      <Route index element={<UserHome/>}/>

      <Route path="/user/userhome" element={<UserHome />} />
      <Route path="/user/students" element={<UserStudent />} />
      <Route path="/user/courses" element={<UserCourses />} />
      <Route path="/user/faculty" element={<UserFaculty />} />
      <Route path='/user/results' element={<UserResults/>}/>
      <Route path='/user/contact' element={<UserContact/>}/>
    </Route>
      
     
      


      <Route path="/admin" element={
        <ProtectedRoute role="admin">
          <AdminLayout/>
        </ProtectedRoute>
        }>
          <Route index element={<AdminDashboard/>}/>
        <Route path='/admin/courses' element={<AdminCourses/>}/>
        <Route path='/admin/faculty' element={<AdminFaculty/>}/>
        <Route path='/admin/results' element={<AdminResults/>}/>
        <Route path='/admin/contacts' element={<AdminContact/>}/>
        <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
        <Route path='/admin/students' element={<AdminStudents/>}/>
        <Route path='/admin/profile' element={<AdminProfile/>}/>
      </Route>
      
      

</Routes>
</>

  );
}

export default App;
