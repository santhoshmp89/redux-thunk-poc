import React from "react";
import { addCounter, minusReducer } from "../actions/demo";
import { get_user_info } from "../actions/userInfo";
import { getPosts } from "../actions/getPost";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Header from "../components/Header";
import Body from "../components/Body";
import Card from "../components/Card";
import CardWithImage from "../components/CardWithImage";
import Row from "../components/Row";
import Col from "../components/Col";

class Homepage extends React.Component {
  componentDidMount() {
    this.props.get_user_info();
  }
  render() {
    const { data } = this.props.userInfo;
    return (
      <div>
        <Header />
        <Body>
          <Row>
            <Col classNames="col-sm-6">
              <br />
              {this.props.userInfo.isFetching && <h2>Loading...</h2>}
              {this.props.userInfo.isError && (
                <h2>Error Found {this.props.userInfo.errorMessage}</h2>
              )}
              {Object.keys(this.props.userInfo.data).length > 0 ? (
                <CardWithImage
                  title="Profile Info"
                  imagUrl={data.data.avatar}
                  first_name={data.data.first_name}
                  last_name={data.data.last_name}
                  btnOnClick={this.props.getPosts}
                />
              ) : null}
            </Col>
          </Row>
        </Body>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter,
  userInfo: state.userInfo,
  postsInfo: state.postReducer
});

const mapDispatchToProps = {
  addCounter,
  minusCounter: minusReducer,
  get_user_info: get_user_info,
  getPosts: getPosts
};

// return bindActionCreators(
//   { addCounter, minusCounter: minusReducer },
//   dispatch
// );

// return {
//   addCounter: val => {
//     dispatch(addCounter(val));
//   },
//   minusCounter: val => {
//     dispatch(minusReducer(val));
//   }
// };
//};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
