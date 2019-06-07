
import React from 'react';
import addLogo from './add.svg';
import cancelLogo  from './cancel.svg';
import './tag.css';

class Tag extends React.PureComponent {

    tagClick =  (e) => {
        if ( !this.props.isCancel ) {
            this.props.onTagClick(e);
            e.preventDefault();
            e.stopPropagation();
        }
    }

    // Icon btn click.
    handleLogoClick = (e) => {
        if ( this.props.isCancel ) {
            this.props.onCancelTag();
            console.log("Inside handle cancel click");
        } else {
            this.props.onAddTag()
        }
        e.preventDefault();
        e.stopPropagation();
    }

    render() {
        
        const iconType  =  this.props.isCancel ? cancelLogo : addLogo;
        const iconInfo  =  this.props.isCancel ? "Remove Tag" : "Add Tag";
        const altInfo   =  this.props.isCancel ? "removeTag" : "addTag";
        const tagParentClasses = this.props.isEnable ? "tagParent" : "tagParent disableTag";

        return (
            <div onClick={this.tagClick} className={tagParentClasses} >

                {/* Tag Color */}
                <div className="tagCategoryId" style={{backgroundColor: this.props.categoryColor}}></div>
                
                <div style={{display: "flex"}}>
                    {/* Tag Name */}
                    <span style={{fontSize: "12px"}}>{this.props.name}</span>

                    {/* Add or Cancel Icon */}
                    <div style={{position: "relative"}}>
                        <img src={iconType} onClick={this.handleLogoClick}
                             className="tagAddLogo" alt={altInfo}/>
                        <span className="tagAddLogoInfo">{iconInfo}</span>
                    </div>

                </div>
                
            </div>
        );
    }
}

export default Tag;

// <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
// <div>Icons made by <a href="https://www.flaticon.com/authors/hadrien" title="Hadrien">Hadrien</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

