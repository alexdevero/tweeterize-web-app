import { useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

interface AppMessagesUI {
  messages: string[];
  notificationVisible: boolean;
  handleSetNotificationVisible: () => void;
}

export const AppMessages = (props: AppMessagesUI) => {
  return (
    <div className="mt-4">
      <h2 className="h5 mb-4">Your Formatted messages:</h2>

      {props.messages.map((el, i) => {
        return <div className={`d-flex justify-content-between align-items-start ${props.messages.length !== 1 && i < props.messages.length - 1 ? 'mb-4' : ''}`} key={i}>
          <span className="h6 font-weight-normal w-100 pr-2">{el}</span>

          <CopyToClipboard text={el} onCopy={() => props.handleSetNotificationVisible()}>
            <button className="btn btn-light btn-sm" title="Copy text to clipboard">
              <span className="bi bi-clipboard"></span>
            </button>
          </CopyToClipboard>
        </div>
      })}
    </div>
  )
}
