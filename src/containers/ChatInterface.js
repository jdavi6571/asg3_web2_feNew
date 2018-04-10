
import React, { Component } from "react";
import { Sidebar } from "../containers/Sidebar"
import { MessagesList } from "../containers/MessagesList"
import { AddMessage } from "../containers/AddMessage"

import "../App.css";

class ChatInterface extends Component {
    
    render() {
        return (
            <div className="container">
                <div className="columns">
                    <div className = "column is-one-third">
                        <Sidebar />
                    </div>
                    <div className = "column is-two-thirds">    
                        <section className="section">
                            <MessagesList />
                            <AddMessage />
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatInterface;
