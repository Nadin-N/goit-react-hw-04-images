import React, { Component } from 'react';
import css from './App.module.css';
import { ThreeCircles } from 'react-loader-spinner';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';

export class App extends Component {
  static BASE_URL = 'https://pixabay.com/api/';
  static API_KEY = '32900750-5d55daf97b577b91954971888';

  state = {
    keyWord: '',
    loading: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: true });
    }, 1000);
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  }

  render() {
    return (
      <section className={css.App}>
        <Searchbar />
        {this.state.loading && (
          <ThreeCircles
            height="100"
            width="100"
            color="#3f51b5"
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor="#8693da "
            innerCircleColor="#3f51b5"
            middleCircleColor="#3a0e74"
          />
        )}
        {this.state.loading === false && <ImageGallery />}

        <Button />
        <Modal />
      </section>
    );
  }
}
