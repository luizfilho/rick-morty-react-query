import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './styles.css'


export default function NavigationBarButton() {
  const navigate = useNavigate();
  const { pathname} = useLocation()
  return (
    <div className="containerButtons">
      <button onClick={() => navigate("/without-react-query")} style={{
        borderColor: pathname ==='/without-react-query' ? '#34568b' : '#fff'
      }}>
        Sem React-Query
      </button>
      <button 
      style={{
        borderColor: pathname ==='/react-query' ? '#34568b' : '#fff'
      }}
      onClick={() => navigate("/react-query")}>Com React-Query</button>
    </div>
  );
}
