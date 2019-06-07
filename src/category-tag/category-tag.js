
import React from 'react';

import Tag from '../tag/tag.js';
import "./category-tag.css";

class CategoryTag extends React.PureComponent {

    handleTagClick    =   (e, tagIndex) => {
        this.props.enableTag(tagIndex)
    }

    handleAddTag      =    (e, tagIndex) => {
        this.props.addTag(tagIndex);
    }

    getDisplayTags  =   () => {
        const searchedText    =   this.props.searchText;
        let displayTag  =   [];
        this.props.tags.forEach( (tag, tagIndex) => {
            let tagName         =   "";   
            if ( searchedText.length > 0 ) {
                const tagIndex  = tag.name.toLowerCase().indexOf(searchedText.toLowerCase());
                if ( tagIndex === 0 ) {
                    const end   =   searchedText.length;
                    tagName     =   <span><b>{tag.name.substr(0, end)}</b><span>{tag.name.substr(end, tag.name.length)}</span></span>
                }
            } else {
                tagName     =   tag.name;
            }
            if ( tagName ) {
                displayTag.push(
                    <Tag key={tag.id} name={tagName} 
                        onTagClick={(e) => this.handleTagClick(e, tagIndex)}
                        isEnable={tag.isEnable} categoryColor={this.props.color}
                        onAddTag={(e) => this.handleAddTag(e, tagIndex)}
                        />
                )
            }
        });
        return displayTag;
    }
    
    render() {
        return (
            <div className="categoryTagParent">
                <div style={{padding: "5px", fontSize: "13px"}}>{this.props.name}</div>
                <span style={{display: "block"}}>
                    {this.getDisplayTags()}
                </span>
            </div>
        );
    }
}

export default CategoryTag;

