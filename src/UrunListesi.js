import React, { Component } from "react";
import { Table, Button } from "reactstrap"



class UrunListesi extends Component {
  sepeteEkle(urun) {
    alert(urun.productName)
  }

  render() {

    return (
      <div>
        <h5>{this.props.selectedCategory}</h5><div />
        <div><h2 align="center">{this.props.bilgiUrunListesi.baslik}</h2></div>

        <Table
        >
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>
                First Name
              </th>
              <th>
                Last Name
              </th>
              <th>
                Username
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.urunler.map(urun => (
              <tr key={urun.id}>

                <th scope="row">{urun.id}</th>
                <td>{urun.productName}</td>
                <td>{urun.quantityPerUnit}</td>
                <td>{urun.unitPrice}</td>
                <td>
                  <div>
                    <Button
                      onClick={() => this.props.sepeteEkle(urun)}
                      color="primary">Ekle</Button>
                  </div>
                </td>

              </tr>



            ))}


          </tbody>
        </Table>

      </div>

    );
  }
}

export default UrunListesi;
