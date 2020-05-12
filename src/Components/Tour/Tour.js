import React, { Component } from "react";
import "./Tour.scss";
export default class Tour extends Component {
  state = {
    showInfo: false,
  };
  handelInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };
  render() {
    const { tour } = this.props;
    return (
      <article className="tour">
        <div className="img-container">
          <img src={tour.img} alt={tour.id} />
          <span
            className="close-btn"
            onClick={() => this.props.removeTour(tour.id)}
          >
            <i className="fas fa-window-close"></i>
          </span>
        </div>
        <div className="tour-info">
          <h3>{tour.city}</h3>
          <h4>{tour.name}</h4>
          <h5>
            info{" "}
            <span onClick={this.handelInfo}>
              <i className="fas fa-caret-square-down"></i>
            </span>
          </h5>
          {this.state.showInfo && <p>{tour.info}</p>}
        </div>
      </article>
    );
  }
}
