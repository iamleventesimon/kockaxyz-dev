'use client';

import React from 'react';

import { Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cube from '../components/Cube';
import Welcome from '../components/Welcome';
import CallToAction from '../components/CallToAction';

import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';
import About from '../components/About';
export default function Index() {

  const { user } = useUser();
  return (
    <>
      <div className="next-steps my-5" data-testid="content-5evfolyam">
        <h2 className="my-5 text-center" data-testid="content-title-5evfolyam">
          Ingyenes ONLINE vizsgafelkészítő 8. osztályosoknak a húsvéti vakációban! Jelentkezz!
        </h2>
      </div>
      <Row className="d-flex justify-content-between" data-testid="content-items">
      <Col key={1} md={5} className="mb-4 call-to-action-column">
          <h3 className="mb-3">
              Diákként
          </h3>
          <p className="text-justify">
            Áprilisban 6x1,5 órában végigvesszük a típusfeladatokat: a hatvány fogalmától a másodfokú egyenletekig, a trigometriától a térmértanig.  A helyek száma korlátozott.
            <br/>
            <br/>
            <Button
              className="nav-link call-to-action-button-inverse"
              href="https://forms.gle/EqLr2JH3GnQyFLgAA"
              target="_blank"
              testId="register-desktop-main">
              Jelentkezek!
            </Button>
          </p>
          
        </Col>
        <Col key={2} md={2} className="mb-4">
        </Col>
        <Col key={3} md={5} className="mb-4 call-to-action-column">
          <h3 className="mb-3">
            Támogatóként
          </h3>
          <p className="text-justify">
            Kezdeményezésünk ingyenes, igyekszünk mindenki számára hozzáférhetővé tenni társadalmi háttértől függetlenül. Csatlakozz támogatóként, hogy mi is segíthessünk!
            <br/>
            <br/>
            <Button
              className="nav-link call-to-action-button-inverse"
              href="https://forms.gle/q4w21tKCF3geqaJF6"
              target="_blank"
              testId="support-desktop-main">
              Támogatom!
            </Button>
          </p>
          
        </Col>
      </Row>
      {!user && (
        <>
        

          <hr />

          <CallToAction />
          <hr />

          <About />
          <hr />

          <CallToAction />
          <hr />

          <Welcome />
          <hr />

          
          <Cube />
          <hr />
          <CallToAction /> 
        </>
      )}

      {user && (
      <>  
      <div className="next-steps my-5" data-testid="content-5evfolyam">
        <h2 className="my-5 text-center" data-testid="content-title-5evfolyam">
          5. évfolyam
        </h2>
      </div>
      <Row className="d-flex justify-content-between" data-testid="content-items">
      <Col key={1} md={4} className="mb-4">
        <h6 className="mb-3">
            <Link href="/pont"> 
              Pont
            </Link>
          </h6>
          <p>
          A pont lényegében egy helyet jelöl, amelynek kiterjedése nincs és mérete is minden irányban nulla.<Link href="/pont"> ☞ </Link></p>
        </Col>
        <Col key={2} md={4} className="mb-4">
        <h6 className="mb-3">
            <Link href="/egyenes"> 
              Egyenes
            </Link>
          </h6>
          <p>
          Az egyenes a pont és a sík mellett a geometria egyik alapfogalma, mindkét irányban végtelen, végtelenül keskeny vonal.<Link href="/egyenes"> ☞ </Link></p>
        </Col>
        <Col key={3} md={4} className="mb-4">
        <h6 className="mb-3">
            <Link href="/sik"> 
            Sík
            </Link>
          </h6>
          <p>
          A sík végtelenül kiterjedt, kétdimenziós objektum, amely ha egy egyenes két pontját, akkor a teljes egyenest is tartalmazza.<Link href="/sik"> ☞ </Link></p>
        </Col>
      </Row>
      <Row className="d-flex justify-content-between" data-testid="content-items">
      <Col key={1} md={4} className="mb-4">
        <h6 className="mb-3">
            <Link href="/felegyenes"> 
              Félegyenes
            </Link>
          </h6>
          <p>
          A geometriában a félegyenes az egyenes egyik oldalán véges, másik oldalán végtelenbe nyúló darabja.<Link href="/felegyenes"> ☞ </Link></p>
        </Col>
        <Col key={2} md={4} className="mb-4">
        <h6 className="mb-3">
            <Link href="/felsik"> 
              Félsík
            </Link>
          </h6>
          <p>
          A síkot egy rajta fekvő egyenes két félsíkra oszt. Nyílt a félsík, ha nem számítjuk hozzá az egyenes pontjait, különben zárt.<Link href="/felsik"> ☞ </Link></p>
        </Col>
        <Col key={3} md={4} className="mb-4">
        <h6 className="mb-3">
            <Link href="/szakasz"> 
            Szakasz
            </Link>
          </h6>
          <p>
          Egy szakasz egy egyenesen levő két különböző pont közötti rész, ami az egyenes minden pontját tartalmazza a két végpont között.<Link href="/szakasz"> ☞ </Link></p>
        </Col>
      </Row>

      <Row className="d-flex justify-content-between" data-testid="content-items">
      <Col key={1} md={4} className="mb-4">
        <h6 className="mb-3">
            <Link href="/szimmetria-pont"> 
              Szimmetria
            </Link>
          </h6>
          <p>
          Az elemi geometriában egy pont vagy egy egyenes szimmetriáját egy másik ponthoz vagy egyeneshez viszonyítva értelmezhetjük.<Link href="/szimmetria-pont"> ☞ </Link></p>
        </Col>
        <Col key={2} md={4} className="mb-4">
        <h6 className="mb-3">
            <Link href="/szog"> 
              Szög
            </Link>
          </h6>
          <p>
          A sík egy pontjából kiinduló két félegyenes a síkot két tartományra osztja: az egyik tartomány és a két félegyenes szöget alkot.<Link href="/szog"> ☞ </Link></p>
        </Col>
        <Col key={3} md={4} className="mb-4">
        </Col>
      </Row>
      <hr/>

      <div className="next-steps my-5" data-testid="content-5evfolyam">
        <h2 className="my-5 text-center" data-testid="content-title-5evfolyam">
          6. évfolyam
        </h2>
      </div>
      <Row className="d-flex justify-content-between" data-testid="content-items">
      <Col key={1} md={4} className="mb-4">
        <h6 className="mb-3">
            <Link href="/potszogek"> 
              Kiegészítő szögek és pótszögek
            </Link>
          </h6>
          <p>
          Azokat a szögeket, amelyeknek az összege 180°, kiegészítő szögeknek is mondjuk. A pótszögek esetén összegük 90°.<Link href="/potszogek"> ☞ </Link></p>
        </Col>
        <Col key={2} md={4} className="mb-4">
        <h6 className="mb-3">
            <Link href="/csucsszogek"> 
              Csúcsszögek
            </Link>
          </h6>
          <p>
          A csúcsszögek olyan fordított állású szögpárok, amelyek szárai páronként egy egyenesen vannak.<Link href="/csucsszogek"> ☞ </Link></p>
        </Col>
        <Col key={3} md={4} className="mb-4">
        <h6 className="mb-3">
            <Link href="/merolegesseg"> 
              Merőlegesség
            </Link>
          </h6>
          <p>
          Az elemi geometriában az két elemet merőlegesnek nevezünk, ha derékszöget, vagyis 90°-ot zárnak be egymással.<Link href="/merolegesseg"> ☞ </Link></p>
        </Col>
      </Row>
      <Row className="d-flex justify-content-between" data-testid="content-items">
      <Col key={1} md={4} className="mb-4">
        <h6 className="mb-3">
            <Link href="/szimmetria-egyenes"> 
            Szimmetria

            </Link>
          </h6>
          <p>
          Az elemi geometriában egy pont vagy egy egyenes szimmetriáját egy másik ponthoz vagy egyeneshez viszonyítva értelmezhetjük.<Link href="/szimmetria-egyenes"> ☞ </Link></p>
        </Col>
        <Col key={2} md={4} className="mb-4">
        <h6 className="mb-3">
            <Link href="/szomszedos-szogek"> 
            Szomszédos szögek
            </Link>
          </h6>
          <p>
          Szomszédos szögeknek híjuk azon szögpárokat, melyeknek egyik szára azonos. Speciális esetei a kiegészítő illetve a pótszögek.<Link href="/szomszedos-szogek"> ☞ </Link></p>
        </Col>
        <Col key={3} md={4} className="mb-4">
        <h6 className="mb-3">
            <Link href="/szogfelezo"> 
            Szögfelező
            </Link>
          </h6>
          <p>
          A szögfelező a szöget két egyenlő szögre osztja, minden pontja azonos távolságra van a szög száraitól és átmegy a szög csúcsán.<Link href="/szogfelezo"> ☞ </Link></p>
        </Col>
      </Row>
      <Row>
        <Col key={1} md={4} className="mb-4">
        <h6 className="mb-3">
            <Link href="/parhuzamossag"> 
              Párhuzamosság
            </Link>
          </h6>
          <p>
          Az euklideszi geometriában két egyenes párhuzamos, ha egysíkúak, és nem metszik egymást.<Link href="/parhuzamossag"> ☞ </Link></p>
        </Col>
        <Col key={2} md={4} className="mb-4">
            
          <h6 className="mb-3">
            
          <Link href="/kor"> 
              <FontAwesomeIcon icon="link" className="mr-2" />
              Kör
            </Link>
          </h6>
          <p>A kör azon pontok halmaza a síkon, amelyek az adott ponttól az adott távolságra vannak.
          azaz a középpontja és a sugara határozzák meg azt.
          <Link href="/kor"> ☞ </Link>
          </p>
        </Col>
        <Col key={3} md={4} className="mb-4">
            
          <h6 className="mb-3">
            
          <Link href="/kor-egyenes"> 
              <FontAwesomeIcon icon="link" className="mr-2" />
              Kör és egy egyenes helyzete
            </Link>
          </h6>
          <p>Egy kör és egy egyenes metszete lehet üres halmaz, egy illetve két pont, azaz tárgyalunk
            külső, érintő illetve metsző egyeneseket.
          <Link href="/kor-egyenes"> ☞ </Link>
          </p>
        </Col>
      </Row>
      <Row>
        <Col key={1} md={4} className="mb-4">
            
          <h6 className="mb-3">
            
          <Link href="/kor-kor"> 
              <FontAwesomeIcon icon="link" className="mr-2" />
              Két különböző kör helyzete
            </Link>
          </h6>
          <p>Két különböző kör metszete lehet üres halmaz, egy pont illetve két pont, azaz értelmezhetünk
            külső, érintő illetve metsző köröket.
          <Link href="/kor-kor"> ☞ </Link>
          </p>
        </Col>
        <Col key={2} md={4} className="mb-4">
            
        </Col>
        <Col key={3} md={4} className="mb-4">
            
        </Col>
      </Row>


      <hr/>


      <div className="next-steps my-5" data-testid="content-5evfolyam">
        <h2 className="my-5 text-center" data-testid="content-title-5evfolyam">
          7. évfolyam
        </h2>
      </div>
      <Row className="d-flex justify-content-between" data-testid="content-items">
        <Col key={1} md={4} className="mb-4">
          <h6 className="mb-3">
              <Link href="/negyszog"> 
                Négyszög
              </Link>
          </h6>
          <p>
          A geometriában a négyszög olyan sokszög, amelynek négy oldala és négy csúcsa van. A belső szögeinek összege 360°.<Link href="/negyszog"> ☞ </Link></p>
        </Col>
        
        <Col key={2} md={4} className="mb-4">
          <h6 className="mb-3">
            
            <Link href="/haromszog"> 
              <FontAwesomeIcon icon="link" className="mr-2" />
              Háromszög
            </Link>
          </h6>
          <p>A geometriában a háromszög olyan sokszög, amelynek három oldala, másként fogalmazva három csúcsa van.
          <Link href="/haromszog"> ☞ </Link>
          </p>
        </Col>

        <Col key={3} md={4} className="mb-4">
          <h6 className="mb-3">
            
            <Link href="/szabalyos-haromszog"> 
              <FontAwesomeIcon icon="link" className="mr-2" />
              Szabályos háromszög
            </Link>
          </h6>
          <p>A szabályos háromszög egy olyan speciális háromszög, amelynek minden oldala egyenlő, így minden szöge is egyenlő, azaz 60°-os.
          <Link href="/szabalyos-haromszog"> ☞ </Link>
          </p>
        </Col>
        
      </Row>
      <Row className="d-flex justify-content-between" data-testid="content-items">
        


        <Col key={1} md={4} className="mb-4">
            
            <h6 className="mb-3">
              
            <Link href="/paralelogramma"> 
                <FontAwesomeIcon icon="link" className="mr-2" />
                Paralelogramma
              </Link>
            </h6>
            <p>A paralelogramma olyan négyszög, amelynek két-két szemközti oldala párhuzamos és egyenlő, szemközti szögei szintén egyenlők.
            <Link href="/paralelogramma"> ☞ </Link>
            </p>
        </Col>
        <Col key={2} md={4} className="mb-4">
        <h6 className="mb-3">
            <Link href="/negyzet"> 
              Négyzet
            </Link>
          </h6>
          <p>
            
          A négyzet egy olyan négyszög, aminek minden oldala és szöge egyenlő, szemközti oldalai párhuzamosak illetve átlói felezik egymást.<Link href="/negyzet"> ☞ </Link></p>
        </Col>
        <Col key={3} md={4} className="mb-4">
          <h6 className="mb-3">
            
            <Link href="/teglalap"> 
              <FontAwesomeIcon icon="link" className="mr-2" />
              Téglalap
            </Link>
          </h6>
          <p>A téglalap egy olyan paralelogramma, amelynek minden szöge egyenlő. Átlói felezik egymást és egyenlő hosszúak, minden szöge derékszög.
          <Link href="/teglalap"> ☞ </Link>
          </p>
        </Col>
        
        
        
        
      </Row>

      <Row className="d-flex justify-content-between" data-testid="content-items">
        <Col key={1} md={4} className="mb-4">
          
        <h6 className="mb-3">
            <Link href="/trapez"> 
              Trapéz
            </Link>
          </h6>
          <p>
            
          A geometriában trapéznak nevezik az olyan négyszöget, amelynek van két egymással párhuzamos oldala.<Link href="/trapez"> ☞ </Link></p>
        </Col>
        <Col key={2} md={4} className="mb-4">
            
          <h6 className="mb-3">
            
          <Link href="/kor-terulet"> 
              <FontAwesomeIcon icon="link" className="mr-2" />
              Kör
            </Link>
          </h6>
          <p>A kör azon pontok halmaza a síkon, amelyek az adott ponttól az adott távolságra vannak.
          azaz a középpontja és a sugara határozzák meg azt.
          <Link href="/kor-terulet"> ☞ </Link>
          </p>
        </Col>

        <Col key={3} md={4} className="mb-4">
        </Col>


        
        
      </Row>
      <hr/>

      <div className="next-steps my-5" data-testid="content-5evfolyam">
        <h2 className="my-5 text-center" data-testid="content-title-5evfolyam">
          8. évfolyam
        </h2>
      </div>
      <Row className="d-flex justify-content-between" data-testid="content-items">
      <Col key={1} md={4} className="mb-4">
        <h6 className="mb-3">
            <Link href="/kocka"> 
              Kocka
            </Link>
          </h6>
          <p>
          A kocka egyike a szabályos testeknek, azaz egy olyan téglatest, amelynek minden éle egyenlő. Élszögei és lapszögei egyaránt 90 fokosak.<Link href="/kocka"> ☞ </Link></p>
        </Col>
        <Col key={2} md={4} className="mb-4">
          <h6 className="mb-3">
            <Link href="/teglatest"> 
              <FontAwesomeIcon icon="link" className="mr-2" />
              Téglatest
            </Link>
          </h6>
          <p>  A téglatest egy olyan egyenes hasáb, amelyet hat téglalap határol, amelyek szemközti páronként egybevágóak és párhuzamosak.

          <Link href="/teglatest"> ☞ </Link>
          </p>
        </Col>

        <Col key={3} md={4}><h6 className="mb-3">
            <Link href="/gomb"> 
              <FontAwesomeIcon icon="link" className="mr-2" />
              Gömb
            </Link>
          </h6>
          <p>A gömb azon pontok mértani helye a térben, melyek egy adott ponttól legfeljebb adott távolságra vannak.
          <Link href="/gomb"> ☞ </Link>
          </p>
        </Col>
      </Row>

      <Row className="d-flex justify-content-between" data-testid="content-items">

        <Col key={1} md={4}><h6 className="mb-3">
            <Link href="/hasab"> 
              <FontAwesomeIcon icon="link" className="mr-2" />
              Hasáb
            </Link>
          </h6>
          <p>A hasáb vagy prizma olyan poliéder, amelynek két párhuzamos lapja egymással egybevágó sokszög, a többi lapja pedig paralelogramma.
          <Link href="/hasab"> ☞ </Link>
          </p>
        </Col>
        

        
        
        <Col key={2} md={4} className="mb-4">
          <h6 className="mb-3">
            <Link href="/gula">
              <FontAwesomeIcon icon="link" className="mr-2" />
              Gúla
            </Link>

          
          </h6>
          <p>A gúla alaplapja egy sokszög, palástja pedig olyan háromszögekből áll, amelyeknek egy nem az alaplap síkjába eső közös csúcsuk van.
          <Link href="/gula"> ☞ </Link>
          </p>
        </Col>
        <Col key={2} md={4} className="mb-4">
          <h6 className="mb-3">
            
            <Link href="/henger"> 
              <FontAwesomeIcon icon="link" className="mr-2" />
              Henger
            </Link>
          </h6>
          <p>A henger térbeli test, melynek alapját egy görbe adja. Többnyire olyan hengerről van szó, aminek alapját ellipszis, speciális esetben kör alkotja.
          <Link href="/henger"> ☞ </Link>
          </p>
        </Col>

      </Row>

      <Row className="d-flex justify-content-between" data-testid="content-items">

        <Col key={2} md={4} className="mb-4">
            
          <h6 className="mb-3">
            
          <Link href="/kup"> 
              <FontAwesomeIcon icon="link" className="mr-2" />
              Kúp
            </Link>
          </h6>
          <p> A kúp alapja egy tetszőleges síkidom, palástját a csúcsot az alap határpontjaival összekötő egyenes szakaszok, az alkotók uniója alkotja.

          <Link href="/kup"> ☞ </Link>
          </p>
        </Col>
      </Row>

      </> )}
    </>
  );
}
