import { Component } from 'react';
import { ConnectedProps, connect } from 'react-redux';

import { ChildProps } from '@apollo/client/react/hoc';
import IconArrowDown from 'assets/IconArrowDown';
import IconArrowUp from 'assets/IconArrowUp';
import { GetCurrencies } from 'graphql-types/GetCurrencies';
import { RootState } from 'store/store';
import Toggler from 'utils/Toggler';

import { Wrapper } from './CurrencyWrapper.style';
import { withCurrencies } from './withCurrencies';
import allActions from '@/store/allActions';

type Props = ChildProps<{}, GetCurrencies> & PropsFromRedux;

class CurrencySwitcher extends Component<Props> {
    render() {
        const { data } = this.props;

        return (
            <Toggler>
                {({ open, ref, handleOpen, handleClose }) => (
                    <Wrapper ref={ref} onClick={handleOpen}>
                        <div>
                            <p>{this.props.currency}</p>
                            {open ? <IconArrowUp /> : <IconArrowDown />}
                        </div>
                        {open && (
                            <ul
                                onClick={(e) => {
                                    e.stopPropagation();
                                }}
                            >
                                {data?.currencies &&
                                    data.currencies.map((item) => (
                                        <li
                                            key={item?.label}
                                            onClick={() => {
                                                this.props.changeCurrency(
                                                    item!.symbol,
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
                    </Wrapper>
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

export default connector(withCurrencies(CurrencySwitcher as any));
