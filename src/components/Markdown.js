import React, { Component } from 'react';
import marked from 'marked';
import 'bootstrap/dist/css/bootstrap.css';

export class Markdown extends Component {

    constructor(props) {
        super(props);

        this.onEdit = this.onEdit.bind(this);
        this.state = {
            text: ""
        }
    }

    onEdit(e) {
        this.setState({
            text: e.target.value
        });
    }

    renderText(text) {
        return { __html: marked(text, { sanitize: true }) };
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <textarea rows="20" className="form-control"
                            onChange={(e) => this.onEdit(e)}></textarea>
                    </div>
                    <div className="col-sm-6" dangerouslySetInnerHTML={this.renderText(this.state.text)}>
                    </div>
                </div>
            </div>
        )
    }
}

export default Markdown;
