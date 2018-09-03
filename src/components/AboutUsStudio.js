import React from 'react';

const showImage = (photo) => {
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
  exitButton.addEventListener('click', function () {
    newWindow.parentElement.removeChild(newWindow);
  })
}
const AboutUsStudio = () => (
  <div id="about-us-studio">
    <div className="container">
      <h1> Fotografia studyjna </h1>
    </div>
    <div className="photo-gallery photo-studio">
      <div className="photo-box">
        <div className="photos studio08" onClick={() => showImage('photo1')}>
        </div>
      </div>
      <div className="photo-box">
        <div className="photos bobo" onClick={() => showImage('photo2')}></div>
      </div>
      <div className="photo-box">
        <div className="photos studio04" onClick={() => showImage('photo3')}></div>
      </div>
    </div>
    <div className="container">
      <p> Działamy od 1997r uwieczniając na fotografiach najważniejsze chwile z życia naszych Klientów.
        Od 21 lat zajmujemy się fotografią rodzinną, biznesową, sesjami przedszkolnymi, ślubnymi, komunijnymi.
          Wieloletnie doświadczenie i indywidualne podejście do każdego klienta pozwala nam spełniać oczekiwania Klientów i czerpać radość z wykonywanej pracy.</p>

    <div className="text-and-photo"> 
    <div className="text-width-photo">
      <p> To co robimy, to dla nas nie tylko praca - fotografia jest naszą pasją.
        Do każdego klienta podchodzimy indywidualnie, na każdą sesję jesteśmy przygotowani.
        Spełnimy Państwa oczekiwania, zrealizujemy marzenia, podsuniemy propozycje, pokażemy przykładowe aranżacje zdjęć.
          Zapraszamy do odwiedzania naszego profilu na którym pojawiać się będą aktualne oferty oraz promocje.</p>
      <p> Współpracujemy z doskonałymi wizażystkami, podczas sesji zadbamy o makijaż naszych modelek,
          a specjalny kącik fryzjerski z myjką do włosów pozwoli na profesjonalne ułożenie włosów.</p>
    </div>
    <div className="flowers"></div>
    </div>
      <p> Zapraszamy do naszego jasnego, klimatycznego studia. Częstujemy kawą, herbatą, znajdzie się też coś słodkiego ;-) </p>
      <p> Zapraszamy do zapoznania się z naszą ofertą.</p>
    </div>
    <div className="panorama"></div>
    <footer>Wszelkie prawa zastrzeżone</footer>
  </div>
);

export default AboutUsStudio;
