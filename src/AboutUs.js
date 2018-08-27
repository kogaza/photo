import React from 'react';

class AboutUs extends React.Component {

  showImage = (photo) => {
    let newWindow = document.createElement('div');
    let showPhoto = document.createElement('div');
    let exitButton = document.createElement('button');
    let arg = photo;
    showPhoto.classList.add(arg);
    newWindow.classList.add('showMe');
    newWindow.appendChild(showPhoto);
    exitButton.innerText = 'zamknij';
    exitButton.classList.add('exitButton');
    newWindow.appendChild(exitButton);
    document.body.appendChild(newWindow);
  }

  render() {
    return (
      <div className="aboutUs">
        <h1> Studio </h1>
        <p> Działamy od 1997r uwieczniając na fotografiach najważniejsze chwile z życia naszych Klientów.
          Od 21 lat zajmujemy się fotografią rodzinną, biznesową, sesjami przedszkolnymi, ślubnymi, komunijnymi.
          Wieloletnie doświadczenie i indywidualne podejście do każdego klienta pozwala nam spełniać oczekiwania Klientów i czerpać radość z wykonywanej pracy.</p>
        <p> To co robimy, to dla nas nie tylko praca - fotografia jest naszą pasją.
          Do każdego klienta podchodzimy indywidualnie, na każdą sesję jesteśmy przygotowani.
          Spełnimy Państwa oczekiwania, zrealizujemy marzenia, podsuniemy propozycje, pokażemy przykładowe aranżacje zdjęć.
          Zapraszamy do odwiedzania naszego profilu na którym pojawiać się będą aktualne oferty oraz promocje.</p>
        <p> Współpracujemy z doskonałymi wizażystkami, podczas sesji zadbamy o makijaż naszych modelek,
          a specjalny kącik fryzjerski z myjką do włosów pozwoli na profesjonalne ułożenie włosów.</p>
        <div className="photo-gallery">
          <div className="photos photo1" onClick={() => this.showImage('photo1')}>
            {/* <img src="images/studio5.jpg" alt="studio5" width="200px" height="100px"/> */}
          </div>
          <div className="photos photo2" onClick={() => this.showImage('photo2')}></div>
          <div className="photos photo3" onClick={() => this.showImage('photo3')}></div>
          <div className="photos photo4" onClick={() => this.showImage('photo4')}></div>
        </div>
        <p> Zapraszamy do naszego jasnego, klimatycznego studia. Częstujemy kawą, herbatą, znajdzie się też coś słodkiego ;-) </p>
        <p> Zapraszamy do zapoznania się z naszą ofertą.</p>

        <h1> Przedszkole </h1>
        <p> Dużo radości i satysfakcji sprawiają nam sesje zdjęciowe wykonywane w przedszkolach.</p>
        <p> Praca z dziećmi to najwspanialsza przygoda, która może spotkać dorosłego człowieka.
        Każdy mały przedszkolak jest inny, do każdego trzeba podejść indywidualnie.
        Największa radość to uśmiech dziecka po drugiej stronie aparatu: rozluźniony, szczęśliwy, naturalny.</p>
        <p> Sesje zdjęciowe w przedszkolach wykonujemy już od 21lat.
      Działamy na terenie całego śląska. </p>
      </div>
    );
  }
}


export default AboutUs;
