import './App.css';
import { Button, Form, FormControl, FormGroup, FormText, Card, Col, Row, Image, Container} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonReact from './ButtonReact';
import ImageReact from './ImageReact';

function App() {
  const titulos = ["Beef Stroganoff",
                  "Chiken Parmesan",
                  "Pork Fried Rice",
                  "Fish Tacos",
                  "Receta 5",
                  "Receta 6",
                  "Receta 7",
                  "Receta 8"];
  const descripciones = ["A classic Russian dish made with tender beef, onions, and mushrooms in a rich sour cream sauce.",
                        "A delicious Italian-American dish made with breaded chicken, marinara sauce, and melted cheese.",
                        "A flavorful Chinese-inspired dish made with tender pork, rice, and mixed vegetables.",
                        "A popular Mexican dish made with crispy fish, tangy cabbage slaw, and a creamy sauce.",
                        "Tacos de pescado crujientes con salsa picante y col rallada.",
                        "Haz tu propia pizza desde cero y añade tus ingredientes favoritos.",
                        "Un plato reconfortante de carne molida, verduras y puré de papas.",
                        "Un batido saludable y delicioso para energizarte."];

  return (
    <div className="container-fluid">
      <header className="text-center mb-4">
      <Container>
      <Row>
        <Col><Image src="https://cdn-icons-png.flaticon.com/512/45/45332.png" roundedCircle className='w-25' /></Col>
        <Col><h1 className="display-3">Recetas de cocina</h1></Col>
      </Row>
      </Container>
      </header>
      <div className='container'>
        <Form>
          <FormGroup>
            <div className="row">
              <div className="col">
                <FormControl type="text" placeholder='Nombre de la receta' className='justify-content-center'/>
              </div>
              <div className="col" >
               <ButtonReact text={"Buscar"} disabled={false}/>
              </div>
            </div>
          </FormGroup>
        </Form>
      </div>
      <div className="container">
      <br></br>
      <Row xs={1} md={4} className="g-4 justify-content-center">
        {titulos.map((titulo, idx) => (
          <Col key={idx}>
            <Card>
            <ImageReact url={"https://media.wiggot.mx/ioPBXKl-l.jpg"} rounded ={"rounded "} className={"w-50"}/>
              <Card.Body>
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>
                  {descripciones[idx]}
                </Card.Text>
                <ButtonReact text={"Ver Receta"} disabled={false}/>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </div>
    </div>
  );
}

export default App;