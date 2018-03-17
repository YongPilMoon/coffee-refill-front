import React, {Component} from 'react';
import PostList from 'components/list/PostList';
import Pagination from 'components/list/Pagination';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as listActions from 'store/modules/list';


class ListContainer extends Component {
    getPostList = () => {
        const { tag, page, ListActions } = this.props;
        ListActions.getPostList({
            page,
            tag
        });
    };


    componentDidMount() {
        this.getPostList();
    }


    componentDidUpdate(prevProps, prevState) {
        if(prevProps.page !== this.props.page || prevProps.tag !== this.props.tag) {
            this.getPostList();

            document.documentElement.scrollTop = 0;
        }
    }

    render() {
        const { posts, page, lastPage, tag } = this.props;
        return (
            <div>
                <PostList posts={posts}/>
                <Pagination page={page} lastPage={lastPage} tag={tag}/>
            </div>
        );
    }
}

ListContainer.propTypes = {};

const mapStateToProps = (state) => ({
    lastPage: state.list.get('lastPage'),
    posts: state.list.get('posts'),
});

const mapDispatchToProps = (dispatch) => ({
    ListActions: bindActionCreators(listActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)
