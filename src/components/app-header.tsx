import { ReactComponent as BirdImage } from './../images/bird.svg'

export const AppHeader = () => (
  <>
    <h1 className="app-heading text-center">Tweeterize</h1>

    <BirdImage className="app-logo mx-auto d-block" width="100" />

    <p className="app-hint-text mb-4 text-center">Paste your text into the container below:</p>
  </>
)
