let updateDom = () => {}

export const store = {
  state: {
    newMessage: 'YEET',
    users: [
      { id: 1, name: 'Anton' },
      { id: 2, name: 'Dmitri' },
      { id: 3, name: 'Sergey' }
    ],
    messages: [
      { id: 1, text: 'Hi!' },
      { id: 2, text: 'Hi!' },
      { id: 3, text: 'Yo!' },
      { id: 4, text: 'Yo!' }
    ],
    posts: [
      { id: 1, text: 'Hey, why nobody loves me?' },
      { id: 2, text: 'Hello World!' }
    ]
  },
  createMessage(message) {
    this.state.messages.push(message)
    updateDom()
  },
  createPost(post) {
    this.state.posts.push(post)
    this.state.newMessage = ''
    updateDom()
  },
  subscribe(observer) {
    updateDom = observer
  }
}
