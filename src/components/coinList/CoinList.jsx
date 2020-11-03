import React, { Component } from 'react';
import styled from 'styled-components';
import Coin from '../coin/Coin';

const Table = styled.table`
 margin: 50px auto 50px auto;
 display: inline-block;
 font-size: 1.4rem;
`;

export default class CoinList extends Component {
    render() {
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Ticker</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.coindata.map(
                            value => <Coin key={value.ticker} {...value} />
                        )
                    }
                </tbody>
            </Table>
            
        )
    }
}