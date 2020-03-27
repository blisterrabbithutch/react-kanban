import React, {useState, Component, useEffect} from 'react';

class FuncClassesComparison extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 1
    }
  }

  componentDidMount() {
    console.log('use effect one time at render');

    document.body.addEventListener('scroll', this.onScroll);
  }

  onScroll() {
    console.log('scroll');
  }

  componentWillUnmount() {
    document.body.removeEventListener('scroll', this.onScroll);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.value !== prevState.value) {
      console.log('use effect когда изменился value');
    }
  }

  setNewValue = () => {
    this.setState({value: this.state.value + 1 })
  };

  render() {
    return (
      <div>
        <h1>Value</h1>
        <div>{this.state.value}</div>
        <button onClick={() => this.setNewValue}>Set Value</button>
      </div>
    )
  }
}

const FuncClassesComparison = () => {
  const [value, setValue] = useState(1);
  const setNewValue = () => setValue(value + 1);
  const onScroll = () => console.log('scroll');

  useEffect(() => {
    // создаст событие при рендере и отпишется при удалении компонента
    document.body.addEventListener('scroll', onScroll);

    // когда возвращаем функцию то она вызовется при удалении компонента
    return () => {
      document.body.removeEventListener('scroll', onScroll);
    }
  }, []);

  useEffect(() => {
    console.log('use effect one time at render');
  }, []);

  useEffect(() => {
    console.log('use effect когда изменился value');
  }, [value]);

  return (
    <div>
      <h1>Value</h1>
      <div>{value}</div>
      <button onClick={() => setValue(value + 1)}>Set Value</button>
    </div>
  )
};

export default FuncClassesComparison;