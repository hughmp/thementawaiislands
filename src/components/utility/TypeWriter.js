import React from 'react';

import './styles/typewriter.css';

export default React.createClass({

  getInitialState() {
    return {
      text: ''
    };
  },

  typeWord(word, index) {
    return new Promise((resolve, reject) => {
      // reset state for a new word
      this.setState({
        text: ''
      });

      const loop = (word, index) => {
        if (index === word.length) {
          resolve(
            this.setState({
              text: word
            })
          );
        } else {
          this.setState((prevState) => ({
            text: prevState.text + word[index]
          }));
          this.timerId.push(
            setTimeout(() => {
              loop(word, index + 1)
            }, 250)
          );
        }
      }
      loop(word, index);
    })
  },

  typeWords(wordsArr, index) {
    if (wordsArr.length <= index) {
      return this.timerId.push(
        setTimeout(
          () => {
            this.typeWords(wordsArr, 0)
          }, 10000
        )
      );
    }
    this.typeWord(wordsArr[index], 0)
      .then(() => {
        this.timerId.push(
          setTimeout(() => {
            this.typeWords(wordsArr, index + 1);
          }, 2000)
        );
      });
  },

  componentDidMount() {
    this.timerId = [];
    const children =
      [].concat(this.props.children);
    const words =
      children.map((child) => (child.props.children.trim()));
    this.typeWords(words, 0);
  },

  componentWillUnmount() {
    if(this.timerId.length > 0) {
      this.timerId.forEach(clearTimeout);
    }
  },

  render() {
    return (
      <div className='typewriter'>
        {this.state.text}
        <span className='cursor'>|</span>
      </div>
    );
  }
});
