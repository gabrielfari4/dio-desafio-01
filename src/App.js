import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import { Container, Content, Row } from "./styles";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState('')

  const handleClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleSum = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleSubtract = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-')
    } else {
      const subtract = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(subtract));
      setOperation('');
    }
  }
  
  const handleMultiplication = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*')
    } else {
      const multiply = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multiply));
      setOperation('');
    }
  }
  
  const handleDivision = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/')
    } else {
      const divide = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(divide));
      setOperation('');
    }
  }
  
  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSum()
          break;
        case '-':
          handleSubtract()
          break;
        case '*':
          handleMultiplication()
          break;
        case '/':
          handleDivision();
          break;
        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
          <Row>
            <Button label='7' onClick={() => handleAddNumber('7')}/>
            <Button label='8' onClick={() => handleAddNumber('8')}/>
            <Button label='9' onClick={() => handleAddNumber('9')}/>
            <Button label='+' onClick={handleSum}/>
          </Row>
          <Row>
            <Button label='4' onClick={() => handleAddNumber('4')}/>
            <Button label='5' onClick={() => handleAddNumber('5')}/>
            <Button label='6' onClick={() => handleAddNumber('6')}/>
            <Button label='-' onClick={handleSubtract}/>
          </Row>
          <Row>
            <Button label='1' onClick={() => handleAddNumber('1')}/>
            <Button label='2' onClick={() => handleAddNumber('2')}/>
            <Button label='3' onClick={() => handleAddNumber('3')}/>
            <Button label='x' onClick={handleMultiplication}/>
          </Row>
          <Row>
            <Button label='=' onClick={handleEquals}/>
            <Button label='0' onClick={() => handleAddNumber('0')}/>
            <Button label='C' onClick={handleClear}/>
            <Button label='/' onClick={handleDivision}/>
          </Row>
      </Content>
    </Container>
  );
}

export default App;
