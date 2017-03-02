/**
 * @name: '数字输入框'
 * @author: 'lxchuan12@163.com'
 * @time: 2017-02-27
 */
import React, {Component, PropTypes} from 'react';

class InputNumber extends Component {
    constructor() {
        super();
        this.state = {
            amount: 1
        };
    }

    changeAmount(ev, num) {
        if (num === undefined) {
            this.setState({
                amount: ev.target.value <= 1 ? 1 : (ev.target.value)
            });
        } else {
            this.setState({
                amount: (this.state.amount - num) <= 1 ? 1 : (this.state.amount - num)
            });
        }
        console.log(this.state.amount);
    }

    add(ev) {
        this.changeAmount(ev, -1);
    }

    dec(ev) {
        this.changeAmount(ev, 1);
    }

    render() {
        return (
            <div className="cart-wrap">
                <input type="text" onChange={(ev) => this.changeAmount(ev)} value={this.state.amount}/>
                <button onClick={() => this.add()}>+</button>
                <button onClick={() => this.dec()}>-</button>
            </div>
        );
    }
}
;
InputNumber.propTypes = {
    amount: PropTypes.number
};
export  default InputNumber;
