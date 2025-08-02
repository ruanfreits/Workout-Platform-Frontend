import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import RecoverPassword from "../pages/RecoverPassword"
import SetNewPassword from "../pages/SetNewPassword"
import CreateExercise from "../pages/CreateExercise"
import UserConfig from "../pages/UserConfig"
import ListExercises from "../pages/ListExercises"
import { AuthProvider } from "../contexts/AuthProvider/auth";
const Private = ({ Item }) => {
  const { signed, loading } = useAuth();

  if (loading) {
    return <div>Carregando...</div>; // ou um componente de loading
  }

  return signed ? <Item /> : <Signin />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/home" element={<Private Item={Home} />} />
          <Route path="/" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="*" element={<Signin />} />
          <Route path="/recoverpassword" element={<RecoverPassword />}/>
          <Route path="/setnewpassword/:token" element={<SetNewPassword/>}/>
          <Route exact path="/exercise" element={<Private Item={CreateExercise} />}/>
          <Route exact path="/userconfig" element={<Private Item={UserConfig} />}/>
          <Route exact path="/listexercises" element={<Private Item={ListExercises}/>}></Route>
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
