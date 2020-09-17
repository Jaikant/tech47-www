import React, { Component } from 'react';

class IntersectionObserver extends Component {
  element = React.createRef();

  state = {
    boundingClientRect: {},
    visiblePercentage: 0,
    isIntersecting: false,
    visible: false,
    entering: false,
    exiting: false
  };

  componentDidMount() {
    if (this.props.element !== 'placeholder') {
      this.setupObserver();
    }
  }

  componentWillUnmount() {
    if (this.observer && typeof this.observer.disconnect === 'function') {
      this.observer.disconnect();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.element !== prevProps.element) {
      this.setupObserver();
    }
  }

  setupObserver = () => {
    // console.log(JSON.stringify(this.generateObserverOptions()));
    const $el = this.props.element || this.element.current;
    this.observer = new window.IntersectionObserver(entries => {
      const element = entries[0];
      this.handleObservation(element);

      this.hasStartedObservation = true;
    }, this.generateObserverOptions());

    this.observer.observe($el);
  };

  handleObservation = element => {
    const boundingClientRect = element.boundingClientRect;
    const eventType = boundingClientRect.top > 0 ? 'entering' : 'exiting';
    const visiblePercentage = Math.floor(element.intersectionRatio * 100);

    this.setState({
      boundingClientRect,
      isIntersecting: element.isIntersecting,
      entering: eventType === 'entering',
      exiting: eventType === 'exiting',
      visible: visiblePercentage > 0,
      visiblePercentage,
      intersectionRatio: element.intersectionRatio
    });
  };

  generateObserverOptions = () => {
    const threshold = [];

    for (let i = 0; i <= 1.0; i += 0.01) {
      threshold.push(i);
    }

    // Setting defaults for options, but overriding with props if provided
    return {
      root: null,
      rootMargin: '0px',
      threshold,
      ...this.props.options
    };
  };

  render() {
    return (
      <div data-component="intersection-observer" ref={this.element}>
        {this.props.children(this.state)}
      </div>
    );
  }
}

export default IntersectionObserver;
