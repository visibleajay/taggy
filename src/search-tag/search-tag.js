
import React from 'react';
import Tag from '../tag/tag.js';
import "./search-tag.css"
import AddLogo from "../tag/add.svg";

class SearchTag extends React.PureComponent {

    isSearchFieldEmpty     =   false;

    handleKeyPress = (e) => {
        // TODO:- Need to refine the function for backspace deletion.
        if ( e.keyCode === 8 && this.props.tags.length > 0 && this.isSearchFieldEmpty ) {
            this.isSearchFieldEmpty =   false;
            this.props.cancelTag(this.props.tags.length-1)
            return ;
        }
        if ( e.keyCode === 8 && e.target.value.length === 0 && !this.isSearchFieldEmpty) {
            this.isSearchFieldEmpty =   true;
        }
        const inputValue    =   e.target.value;
        this.props.inputEnter(inputValue);
    }

    addNewTag = () => {
        this.props.addNewTag();
    }

    render() {
        return (
            <div className="searchTagParent">
                {
                    this.props.tags.map( (tag, tagIndex) => 
                            <Tag key={tag.id} name={tag.name} 
                                 isEnable={tag.isEnable} categoryColor={tag.color} 
                                 isCancel="true"  
                                 onCancelTag={() => this.props.cancelTag(tagIndex)}/> )
                }
                <input type="text" placeholder="Create Tag Name" 
                    className="searchTagInput" onKeyUp={this.handleKeyPress} />
                <div style={{position: "relative", padding: "0px 5px"}}>
                    <img src={AddLogo} className="searchTagAddTagImg" alt="addNewTag" onClick={this.addNewTag} />
                    <div className="searchTagAddTagInfo">
                        Add new tag.
                    </div>
                </div>
                
            </div>
        );
    }
}

export default SearchTag;
