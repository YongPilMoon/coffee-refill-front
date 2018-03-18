import React, { Component } from 'react';
import EditorHeader from '../../components/editor/EditorHeader';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { initialize, writePost } from "../../store/actions/editor";

class EditorHeaderContainer extends Component {
  componentDidMount() {
    const { initialize } = this.props;
    initialize(); // 에디터를 초기화 합니다.
  }

  handleGoBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  handleSubmit = async () => {
    const { title, markdown, tags, writePost, history } = this.props;
    const post = {
      title,
      body: markdown,
      // 태그 텍스트를 , 로 분리시키고 앞뒤 공백을 지운 후 중복 되는 값을 제거해줍니다.
      tags: tags === "" ? [] : [...new Set(tags.split(',').map(tag => tag.trim()))]
    };
    try {
      await writePost(post);
      // 페이지를 이동시킵니다. 주의: postId 를 상단에서 레퍼런스를 만들지 않고
      // 이 자리에서 this.props.postId 를 조회해주어야합니다. (현재의 값을 불러오기 위함)
      history.push(`/post/${this.props.postId}`);
    } catch (e) {
      console.log(e);
    }
  };


  render() {
    const { handleGoBack, handleSubmit } = this;

    return (
      <EditorHeader
        onGoBack={handleGoBack}
        onSubmit={handleSubmit}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  initialize: () => dispatch(initialize()),
  writePost: (post) => dispatch(writePost(post))
});

export default connect(
  (state) => ({
    title: state.editor.get('title'),
    markdown: state.editor.get('markdown'),
    tags: state.editor.get('tags'),
    postId: state.editor.get('postId')
  }),
  mapDispatchToProps
)(withRouter(EditorHeaderContainer));