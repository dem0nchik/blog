import React from 'react'
import styles from './Calculator.module.css'
import ButtonNum from './ButtonNum/ButtonNum'
import ButtonAct from './ButtonAct/ButtonAct'

class Calculator extends React.Component {
    state = {
        oBot: '0',
        oTop: '',
        comma: false,
        preOrderNum: 0,
        preOrderAct: ''
    }
    inputNum = num => {
        if(num !== '.' && 
            (this.state.oBot.toString() === 'NaN' || this.state.oBot.length > 14))
                this.setState({oBot: num})

        if(this.state.oBot.indexOf('.') === -1)
            this.setState({comma: false})

        if(this.state.oBot !== '' && 
            this.state.oBot.length < 13 && 
            num === '.' && !this.state.comma)
        {
            this.setState({
                oBot: this.state.oBot + '.',
                comma: true
            })
        }
        if(this.state.oBot.length < 14 && num !== '.') {
            const frstNum = this.state.oBot === '0' ? '' : this.state.oBot
            this.setState({oBot: frstNum + num})
        }
    }
    removeNum = () => {
        const {oBot} = this.state
        let slices = oBot.slice(0, -1)
        slices = slices === '' ? '0' : slices
        this.setState({oBot: slices})

        if(oBot.indexOf('.') === -1)
            this.setState({comma: false})       
    }

    clear = () => this.setState({
        oBot: '0', oTop: '',
        preOrderNum: 0,
        preOrderAct: ''
    }) 

    plusMinus = () => {
        let signNum = 0
        if(Math.sign(+this.state.oBot))
            signNum = -+this.state.oBot
        else 
            signNum = Math.abs(+this.state.oBot)

        this.setState({oBot: signNum.toString()}) 
    } 

    sqrt = () => {
        if(this.state.oBot !== '0')
            this.setState({
                oTop: this.state.oTop + `sqrt(${this.state.oBot})`,
                oBot: Math.sqrt(+this.state.oBot).toString(),
                preOrderNum: Math.sqrt(+this.state.oBot)
            }) 
    }

    divide = () => {
        if(+this.state.oBot !==0) {
            this.setState({
                preOrderAct: '/',
                oTop: this.state.oTop + `${this.state.oBot} / `,
                preOrderNum: this.state.oBot,
                oBot: '0'
            })
            if(+this.state.preOrderNum !== 0 && this.state.preOrderAct !== ''){
                this.setState({
                    oBot: eval(+this.state.preOrderNum+this.state.preOrderAct+this.state.oBot).toString(),
                    preOrderNum: eval(this.state.preOrderNum+this.state.preOrderAct+this.state.oBot)
                })/* eslint no-eval: 0 */
            } 
        }          
    }
    
    symbols = sim => {
        this.setState({
            preOrderAct: sim,
            oTop: this.state.oTop + `${this.state.oBot} ${sim} `,
            preOrderNum: this.state.oBot,
            oBot: '0'
        })
        if(this.state.preOrderNum !== 0){
            this.setState({
                oBot: eval(this.state.preOrderNum+this.state.preOrderAct+this.state.oBot).toString(),
                preOrderNum: eval(this.state.preOrderNum+this.state.preOrderAct+this.state.oBot)
            })/* eslint no-eval: 0 */
        }
    }

    equals = () => {
        if(this.state.preOrderNum !== 0){
            this.setState({
                oBot: eval(this.state.preOrderNum+this.state.preOrderAct+this.state.oBot).toString(),
                oTop: '',
                preOrderNum: 0,
                preOrderAct: ''
            })/* eslint no-eval: 0 */
        }  
    }

    action = act => {
        switch(act) {
            case '←':
                this.removeNum()
                break
            case 'CE':
            case 'C':
                this.clear()
                break
            case '±':
                this.plusMinus()
                break
            case '√':
                this.sqrt()
                break
            case '/':
                this.divide()
                break
            case '+':
                this.symbols('+')
                break
            case '-':
                    this.symbols('-')
                    break
            case '*':
                    this.symbols('*')
                    break
            case '=':
                this.equals()
                break
            default:
                break
        }
    }
    render() {
        return (
            <div className={styles.calc}>
                <h5>Калькулятор</h5>
                <div className={styles.output}>
                    <p className={styles.out_top}>{this.state.oTop}</p>
                    <p className={styles.out_bot}>{this.state.oBot}</p>
                </div>
                
                <div className={styles.input_top}>
                    <ButtonAct act='←' action={this.action}/>
                    <ButtonAct act='CE' action={this.action}/>
                    <ButtonAct act='C' action={this.action}/>
                    <ButtonAct act='±' action={this.action}/>
                    <ButtonAct act='√' action={this.action}/>
                </div>
                <div className={styles.input_bot}>
                    <div className={styles.number}>
                        <ButtonNum num='7' inputNum={this.inputNum} />
                        <ButtonNum num='8' inputNum={this.inputNum}/>
                        <ButtonNum num='9' inputNum={this.inputNum}/>
                        <ButtonNum num='4' inputNum={this.inputNum}/>
                        <ButtonNum num='5' inputNum={this.inputNum}/>
                        <ButtonNum num='6' inputNum={this.inputNum}/>
                        <ButtonNum num='1' inputNum={this.inputNum}/>
                        <ButtonNum num='2' inputNum={this.inputNum}/>
                        <ButtonNum num='3' inputNum={this.inputNum}/>
                        <ButtonNum num='0' zero={true} inputNum={this.inputNum}/>
                        <ButtonNum num='.' inputNum={this.inputNum}/>
                    </div>
                    <div className={styles.action}>
                        <ButtonAct act='/' action={this.action}/>
                        <ButtonAct act='*' action={this.action}/>
                        <ButtonAct act='-' action={this.action}/>
                        <ButtonAct act='+' action={this.action}/>
                        <ButtonAct act='%' action={this.action}/>
                        <ButtonAct act='1/x' action={this.action}/>
                        <ButtonAct act='=' equals={true} action={this.action}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator