import React from 'react'
import { connect } from 'react-redux'
import {
  Segment,
  Header,
  Form,
  TextArea,
  Button,
} from 'semantic-ui-react'
import { setFlash } from '../actions/flash'
import { addMessage } from '../actions/messages'
import ChatMessage from './ChatMessage'

class ChatWindow extends React.Component {
  render() {
    return (
      <Segment>ChatWindow component goes here</Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    user: state.user,
    messages: state.messages,
  }
}

export default connect(mapStateToProps)(ChatWindow)