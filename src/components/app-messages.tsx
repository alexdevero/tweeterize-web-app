interface AppMessagesUI {
  messages: string[]
}

export const AppMessages = (props: AppMessagesUI) => (
  <div className="mt-4">
    <h2 className="h5 mb-4">Your Formatted messages:</h2>

    {props.messages.map((el, i) => {
      return <div className={`h6 font-weight-normal ${props.messages.length !== 1 && i < props.messages.length - 1 ? 'mb-4' : ''}`} key={i}>{el}</div>
    })}
  </div>
)
