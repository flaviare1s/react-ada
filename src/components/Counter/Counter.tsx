import React from "react";

interface CounterState {
  contador: number;
  name: string;
  password: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export class Counter extends React.Component<{}, CounterState> {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  constructor(props: {}) {
    super(props);
    this.state = { contador: 0, name: "", password: "" };
  }

  render() {
    return (
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>{this.state.contador}</h1>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={() =>
              this.setState((prevState) => ({
                contador: prevState.contador + 1,
              }))
            }
            style={{ padding: "5px 10px" }}
          >
            +
          </button>
          <button
            onClick={() =>
              this.setState((prevState) => ({
                contador: prevState.contador - 1,
              }))
            }
            style={{ padding: "5px 10px" }}
          >
            -
          </button>
        </div>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <label
            style={{ display: "flex", flexDirection: "column" }}
            htmlFor="name"
          >
            Nome:
            <input
              id="name"
              type="text"
              value={this.state.name}
              onChange={(e) => {
                console.log("Name changed:", e.target.value);
                this.setState({ name: e.target.value });
              }}
            />
          </label>
          <label
            style={{ display: "flex", flexDirection: "column" }}
            htmlFor="password"
          >
            Password:
            <input
              id="password"
              type="password"
              value={this.state.password}
              onChange={(e) => {
                console.log("Password changed:", e.target.value);
                this.setState({ password: e.target.value });
              }}
            />
          </label>
        </form>
      </div>
    );
  }
}
