import React from "react";
import RoutesApp from "./routes";
import { AuthProvider } from "./contexts/AuthProvider/auth";
import { ExerciseProvider } from "./contexts/ExerciseProvider/Exercises";
import GlobalStyle from "./styles/global";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"

// <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Inclui o JS do Bootstrap
import $ from 'jquery'; // Se precisar do jQuery
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />


const App = () => (
  <AuthProvider>
    <ExerciseProvider>
    <RoutesApp />
    <GlobalStyle />
    </ExerciseProvider>
  </AuthProvider>
);

export default App;
