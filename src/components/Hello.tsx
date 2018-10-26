import * as React from "react";

export interface HelloProps {
  name?: string;
}

export class Hello extends React.Component<HelloProps, any> {
  render() {
    const {name} = this.props;

    return (
      <h1>Hello {name ? name : 'there'}!</h1>
    )
  }
}
