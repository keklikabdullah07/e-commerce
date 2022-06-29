import React, { Component } from 'react';
import { NavLink, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge } from "reactstrap";
import Logo from "./img/pngegg.png";
import Cart from "./img/cart.png"


class SepetOzeti extends Component {
    bosSepet() {
        return (
            <NavItem>
                <NavLink>
                    <img src={Logo} height={30} />
                </NavLink>
            </NavItem>
        )
    }
    sepetOzeti() {
        return (
            <div>
                <UncontrolledDropdown inNavbar nav>
                    <DropdownToggle caret nav>


                        <img src={Cart} height={30} /> -{this.props.sepet.length}

                    </DropdownToggle>

                    <DropdownMenu right>
                        {this.props.sepet.map(sepetUyesi => (
                            <DropdownItem key={sepetUyesi.urun.id}>
                                <Badge color="danger" onClick={() => this.props.sepettenCikar(sepetUyesi.urun)}>*</Badge>
                                {sepetUyesi.urun.productName}
                                <Badge color='success'>{sepetUyesi.adet}</Badge>
                            </DropdownItem>

                        ))}

                        <DropdownItem divider />
                        <DropdownItem>
                            Reset
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
        )
    }
    render() {

        return (
            <div>
                {this.props.sepet.length > 0 ? this.sepetOzeti() : this.bosSepet()}
            </div>


        );
    }
}

export default SepetOzeti;