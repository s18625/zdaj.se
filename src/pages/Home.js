import React from "react";
import "./Home.css"

const Home = (props) => (
  <div className="home">
    <h1 className="mainHeader">Masz problem z zaliczeniem przedmiotu 
    lub chcialbyś doszlifowaś swoje umiejetności?
    </h1>
    <div className="article">
      Oferujemy zarówno klasyczne korepetycje jak i rozwiazywanie przyslanych przez Ciebie zadań.
      Jezeli nasze rozwiazanie nie otrzyma oceny conajmniej dostatecznej gwarantujemy zwrot pieniędzy.
      Zarezerwuj termin w sekcji sklepu lub zadaj nam pytanie w razie niejasności uzywając formularza
      sekcji kontaktu.
    </div>

    <div className="subHeader">Jak dzialamy?</div>
    <div className="article">
      Po wypełnieniu formularza
      na podanego przez Ciebie  e-maila wysłana zostanie odpowiedź wraz z proponowaną ceną za usługę.
      Cena generowana jest automatycznie i nie jest ostateczna. Może zostać zarówno obniżona
      jak i zwiększona w trakcie negocjacji.
      Cena zalezy od przedmiotu, prowadzącego oraz nakładu pracy jakiego od nas wymagasz.
      W wypadku otrzymania oceny niższej niż dostateczny mozliwe jest zgloszenie reklamacji i odzskanie
      pieniędzy.
    </div>

    <div className="subHeader">Dlaczego my?</div>
    <div className="article">
      Pomimo tego że prawie 100% naszych rozwiązań zdaje jestesmy jedna z najtańszych opcji i jako jedni z niewielu 
      zapewniamy gwarancje zwrotu pieniedzy w przypadku oceny niższej niz dostatecznej.
    </div>


  </div>
);

export default Home;
