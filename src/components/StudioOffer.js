import React from 'react';
import '../App.css';
import { menuUp } from './functions'
import rodzinne from '../offers/rodzinne.pdf';
import brzuszkowe from '../offers/brzuszkowe.pdf';
import noworodkowe from '../offers/noworodkowe.pdf';
import dzieciece from '../offers/dzieciece.pdf';
import komercyjne from '../offers/komercyjne.pdf';
import plenerowe from '../offers/plenerowe.pdf';
import wizerunkowe from '../offers/wizerunkowe.pdf';
import komunijne from '../offers/komunijne.pdf';


export default class StudioOffer extends React.Component {

  componentDidMount() {
    menuUp("about-us-studio-offer");
  }

  render() {
    return (
      <div id="about-us-studio-offer">
        <h1 className="title">Oferta studyjna</h1>
        <div className='offersContainer'>
          <div className='offerts'>
            <div className='offer family'>
              <a href={rodzinne} target='_black'>Sesje rodzinne</a>
            </div>
            <div className='offer children'>
              <a href={dzieciece} target='_black'>Sesje dziecięce</a>
            </div>
          </div>
          <div className='offerts'>
            <div className='offer baby'>
              <a href={noworodkowe} target='_black'>Sesje noworodkowe</a>
            </div>
            <div className='offer professional'>
              <a href={wizerunkowe} target='_black'>Sesje wizerunkowe</a>
            </div>
          </div>
          <div className='offerts'>
            <div className='offer tummy'>
              <a href={brzuszkowe} target='_black'>Sesje brzuszkowe</a>
            </div>
            <div className='offer openAir'>
              <a href={plenerowe} target='_black'>Sesje plenerowe</a>
            </div>
          </div>
          <div className='offerts'>
            <div className='offer commercial'>
              <a href={komercyjne} target='_black'>Sesje komercyjne</a>
            </div>
            <div className='offer communion'>
              <a href={komunijne} target='_black'>Sesje komunijne</a>
            </div>
          </div>
        </div>
        <p>
          Jeżeli szukasz fotografa, który "na szybko pstryknie" parę fotek, prawdopodobnie źle trafiłeś <i className="material-icons"> mood </i>
        </p>
        <p>
          No, może jedynie zdjęcia do dokumentów można zrobić z marszu.
        </p>
        <p>
          Do każdej innej sesji trzeba się przygotować. My to robimy bardzo starannie, poznając wcześniej Wasze oczekiwania, gust i styl.
        </p>
        <p>
          Dobrze jest spotkać się wcześniej. Szczególnie sesje dziecięce warto rozpocząć w ten sposób. <br />
          Dla dzieci jest to nie lada wyzwanie i nierzadko stres. <br />
          Wizyta w nowym miejscu i uśmiechanie się do zupełnie obcej osoby nawet dorosłym sprawia sporo problemu.
        </p>
        <p>
          Na pierwszym spotkaniu oswajamy się ze sobą podczas luźnej rozmowy, poznajemy studio - pijemy dobrą kawę, herbatę i jemy "krówki".
        </p>
        <p>
          Kolejna wizyta przebiega wtedy zupełnie swobodnie, jak u starych znajomych <i className="material-icons"> mood </i>
        </p>
        <p>
          Jeżeli nie ma możliwości spotkania to nawet rozmowa telefoniczna lub przez messenger będzie bardzo wskazana.
        </p>
        <p>
          Do ustalenia terminu sesji konieczny jest kontakt  mailowy na adres: <br />
          studio@fotodawid.eu lub telefoniczny 509 529 819
        </p>
        <p>
          Sesje odbywają się od poniedziałku do piątku w godz. 9-17. <br />
          lub w soboty po ustaleniach indywidualnych.
        </p>
        <p>
          W dniu rezerwacji prosimy o dokonanie przelewu 50% wartości pakietu. <br />
          Pozostała kwota płatna w dniu sesji.
        </p>
        <p>
          Sesje trwają od 30min. do 2 godzin.
        </p>
        <p>
          Cena obejmuje maksymalnie 2 osoby dorosłe plus 2 dzieci.
        </p>
        <p>
          Przy większej liczbie osób biorących udział w sesji - dopłata od 50zł/osobę, w zależności od pakietu.
        </p>
        <p>
          Jeżeli sesja jest prezentem, w cenie otrzymacie imienne zaproszenie dla bliskiej osoby.
        </p>
        <p>
          Nr konta do wpłaty zaliczki: <br />
          mBank
          37 1140 2004 0000 3402 4725 5023
        </p>
        <p>
          Agencja Fotograficzno-Reklamowa "Dawid" <br />
          Krystyna Grelak <br />
          pl. św. Anny 2 <br />
          43-100 Tychy
        </p>
        <footer>Wszelkie prawa zastrzeżone</footer>

      </div >
    )
  }
}

