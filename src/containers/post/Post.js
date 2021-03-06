import React, {Component} from 'react';
import PostInfo from 'components/post/PostInfo';
import PostBody from 'components/post/PostBody';
import {connect} from 'react-redux';
import {getPost} from "../../store/actionCreators/post";

class Post extends Component {
  initialize = () => {
    const { getPost, id } = this.props;
    getPost(id);
  };


  componentDidMount() {
    this.initialize();
  }

  render() {
    const { loading, post } = this.props;

    if(loading) return null; // 로딩중일땐 아무것도 보여주지 않음

    const { title, body, publishedDate, tags } = post.toJS();

    return (
      <div>
        <PostInfo title={title} publishedDate={publishedDate} tags={tags}/>
        <PostBody body={body}/>
      </div>
    );
  }
}

Post.propTypes = {};

const mapDispatchToProps = (dispatch) => ({
  getPost: (id) => dispatch(getPost(id))
});

export default connect(
  (state) => ({
    post: state.post.get('post'),
  }),mapDispatchToProps)(Post);
