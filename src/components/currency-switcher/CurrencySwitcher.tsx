import { Component } from 'react';
import { ConnectedProps, connect } from 'react-redux';

import { ChildProps } from '@apollo/client/react/hoc';
import IconArrowDown from 'assets/IconArrowDown';
import IconArrowUp from 'assets/IconArrowUp';
import { GetCurrencies } from 'shared/types';
import { RootState } from 'store/store';
import Toggler from 'utils/Toggler';

import { CurrencySwitcherWrapper } from './CurrencyWrapper.style';
import { withCurrencies } from './withCurrencies';
import allActions from '@/store/allActions';

type Props = ChildProps<{}, GetCurrencies> & PropsFromRedux;

class CurrencySwitcher extends Component<Props> {
    render() {
        const { data } = this.props;

        return (
            <Toggler>
                {({ open, ref, handleOpen, handleClose }) => (
                    <CurrencySwitcherWrapper ref={ref}>
                        <div
                            className="currency_main"
                            onClick={() => {
                                if (open) {
                                    handleClose();
                                } else {
                                    handleOpen();
                                }
                            }}
                        >
                            <p>{this.props.currency}</p>
                            {open ? <IconArrowUp /> : <IconArrowDown />}
                        </div>
                        {open && (
                            <ul
                                className="currency_list"
                                onClick={(e) => {
                                    e.stopPropagation();
                                }}
                            >
                                {data?.currencies &&
                                    data.currencies.map((item) => (
                                        <li
                                            className="currency_list_item"
                                            key={item?.label}
                                            onClick={() => {
                                                this.props.changeCurrency(
                                                    item.symbol,
                                                );
                                                handleClose();
                                            }}
                                        >
                                            <span>{item?.symbol}</span>
                                            <span>{item?.label}</span>
                                        </li>
                                    ))}
                            </ul>
                        )}
                    </CurrencySwitcherWrapper>
                )}
            </Toggler>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        currency: state.cart.currency,
    };
};
const { changeCurrency } = allActions;
const connector = connect(mapStateToProps, { changeCurrency });

type PropsFromRedux = ConnectedProps<typeof connector>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default connector(withCurrencies(CurrencySwitcher as any));
