import React, {useState, Component, PureComponent, useEffect} from 'react';

class ErrorBoundary extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      stack: null,
      message: null,
    }
  }

  static getDerivedStateFromError(error) {
    // нужен для просто поиска компонента с ошибкой - аналитика
    return {
      hasError: true,
      stack: error.stack ,
      message: error.message
    };
  }

  componentDidCatch(error, errorInfo) {
    // нужен для отправки ошибок логирования ошибок на сервер
    console.log('error', error);
    console.log('errorInfo', errorInfo);
  }

  reloadPage() {
    window.location.reload();
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Ребята, произошла ошибка.</h1>
          <button onClick={this.reloadPage}>Перезагрузить страницу</button>
          {/*<button>Показать техническую информацию</button>*/}
          {/*{this.state.stack}*/}
        </div>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;