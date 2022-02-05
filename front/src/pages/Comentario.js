import React from "react";

class Comentario extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    //alert("An essay was submitted: " + this.state.value );
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const cuentoId = urlParams.get('_id');
    event.preventDefault();

    console.log(this.state)

    const response =  fetch(
        process.env.REACT_APP_BACK_API_URL + "/api/setComentarios",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ _id: cuentoId , comentario: this.state.value}),
        }
      )
        .then((resp) => window.location.reload())
        .catch((error) => console.log(error));

        
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Deja tu comentario:
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
          />{" "}
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Comentario;
