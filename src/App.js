import Navigate from "./Navigate";
import UrunListesi from "./UrunListesi";
import Kategori from "./Kategori";
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";

class App extends Component {
  state = { selectedCategory: "", urunler: [], sepet: [] };
  changeCategory = (category) => {
    this.setState({ selectedCategory: category.categoryName });
  };
  urunGetir() {
    fetch("http://localhost:3000/products")
      .then(rsponse => rsponse.json())
      .then(data => this.setState({ urunler: data }))
  }
  sepeteEkle = (urun) => {
    let yeniUrun = this.state.sepet;
    var urunEklendi = yeniUrun.find((s) => s.urun.id === urun.id);
    if (urunEklendi) {
      urunEklendi.adet += 1;
    } else {
      yeniUrun.push({ urun: urun, adet: 1 });
    }
    this.setState({ sepet: yeniUrun })
    alertify.success(urun.productName+"Ürün Sepetinize Eklendi")

  }
  sepettenCikar=(urun)=>{
   
    let kalanUrunler=this.state.sepet.filter(u=>u.urun.id!==urun.id)
    this.setState({sepet:kalanUrunler})
   
    alertify.error(urun.productName+"Ürün Sepetinizden Çıkarıldı")
    
  }


  componentDidMount() { this.urunGetir() };






  render() {
    let bilgiUrunListesi = { baslik: "Ürün Litesi!!" };
    let bilgiKategori = { baslik: "Kategori", ilaveBilgi: "İlave Bilgi" };
    return (
      <div>
        <Container>
          <Row>
            <Navigate 
            sepettenCikar={this.sepettenCikar}
            sepet={this.state.sepet} />
          </Row>
          <Row>
            <Col xs="4">
              <Kategori
                selectedCategory={this.state.selectedCategory}
                changeCategory={this.changeCategory}
                bilgiKategori={bilgiKategori}
              />
            </Col>
            <Col xs="8">
              <UrunListesi
                sepeteEkle={this.sepeteEkle}
                urunler={this.state.urunler}
                selectedCategory={this.state.selectedCategory}
                bilgiUrunListesi={bilgiUrunListesi}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
