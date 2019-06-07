
import React from 'react';

import "./add-new-tag.css";

class NewTag extends React.PureComponent {

    closeLightbox = () => {
        this.props.closeLightbox();
    }

    handleSubmit =  (event) => {
        const tag = {
            "category": event.target.category.value,
            "name": event.target.name.value,
            "description": event.target.description.value,
            "group": event.target.group.value
        }
        this.props.onNewTag(tag);
        event.stopPropagation();
        event.preventDefault();
    }

    render() {
        const isLightboxVisible = this.props.isVisible ? "flex" : "none";

        return (
            <div style={{display: isLightboxVisible}} className="addNewTagParent">
                <div>
                    <div className="header">
                        Add Tag
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="body">
                            <select name="category" className="addNewForm" placeholder="Category" required>
                                <option value="0">Country</option>
                                <option value="1">City</option>
                            </select>
                            <input name="name" className="addNewForm" placeholder="Name" required/>
                            <input name="description" className="addNewForm" placeholder="Description" required/>
                            <select name="group" placeholder="Group" className="addNewForm" required>
                                <option value="LV">LV</option>
                                <option value="HV">HV</option>
                            </select>
                        </div>
                        <div className="addNewTagFooter">
                            <button type="button" className="btnStyle" onClick={this.closeLightbox}>Cancel</button>
                            <button type="submit" className="btnStyle addBtn">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default NewTag;
