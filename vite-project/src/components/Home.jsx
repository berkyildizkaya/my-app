import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppNavBar from "./AppNavBar";
import { Container, Row,Col } from "react-bootstrap";

const Home = () => {
  const navigate = useNavigate();
  const [myProducts,setMyProducts] = useState([])
  useEffect(() => {
    const getData = async () => {
      try {
        const {data} = await axios.get("http://192.168.100.21:64195/Test/TestAPI");
        setMyProducts(data);
      } catch (error) {
        console.error("Veri getirme hatası:", error);
      }
    };

    getData();
  }, []);
  return(
  <>
  <div>
    <AppNavBar/>
    <Container>
        <Row>
            <Col md={7}>
            <table>
    <thead>
        <tr>
        <th>Personel Adı</th>
        </tr>
    </thead>
    <tbody>
    {
        myProducts.slice(0,50).map((data,i)=>(
           <tr key={i}>
            <td onClick={()=> navigate(`detail/${data?.PERSID}`)}>{data?.PERDESC}</td>
           </tr>
            // <div key={i}>
            //     <div onClick={()=> navigate(`detail/${data?.PERSID}`)}>{data?.PERDESC}</div>
            // </div>
        ))
    }
    </tbody>
    </table>
            </Col>
        </Row>
    </Container>
    
    </div>
  </>
  ) 
};

export default Home;
