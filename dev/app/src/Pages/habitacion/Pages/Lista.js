import { Component } from "react";
import { connect } from "react-redux";
import { SLoad, SNavigation, SPage, STable2 } from "servisofts-component";
import FloatButtom from "../../../Components/FloatButtom";
import Parent from "../index";

class Lista extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.key_servicio = SNavigation.getParam('key_servicio');
  }

  getContent() {
    var data = Parent.Actions.getAll(this.props);
    if (!data) return <SLoad />;
    return (
      <STable2
        header={[
          { key: "index", label: "#", width: 50 },
          { key: "empresa", label: "nombre", width: 150 },
          { key: "nombre_habitacion", label: "nombre", width: 150 },
          { key: "estado_habitacion", label: "nombre", width: 150 }
        ]}
        filter={data => {
          if (data.estado != 1) return false;
          return true;
        }}
        data={data}
      />
    );
  }
  render() {
    return (
      <SPage title={"Lista de " + Parent.component} disableScroll center>
        {this.getContent()}
        <FloatButtom
          onPress={() => {
            SNavigation.navigate(Parent.component + "/registro");
          }}
        />
      </SPage>
    );
  }
}
const initStates = state => {
  return { state };
};
export default connect(initStates)(Lista);
