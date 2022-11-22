import { Component } from 'react';

import CurrencySwitcher from '@/components/ui/currency-switcher/CurrencySwitcher';

export default class Home extends Component {
    state = {};

    render() {
        return (
            <div>
                <CurrencySwitcher />
            </div>
        );
    }
}
