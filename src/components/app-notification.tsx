interface NotificationUI {
  handleNotificationClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Notification = (props: NotificationUI) => (
  <div className="app-notification d-flex align-items-center h6 font-weight-normal text-danger p-3 m-0 bg-white position-absolute rounded">
    Message copied
    <span role="img" aria-label="Thumbs Up" className="ml-2">👍</span>!
    &nbsp;
    <span className="h4 text-body m-0" role="button" onClick={() => props.handleNotificationClose(false)}>&times;</span>
    </div>
)
