import React, { Component } from "react";
import CurrencySwitcher from "components/ui/currency-switcher/CurrencySwitcher";
type Props = {};

type State = {};

export default class Home extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div>
        <CurrencySwitcher />
      </div>
    );
  }
}
