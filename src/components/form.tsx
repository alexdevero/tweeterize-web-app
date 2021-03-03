import { FormHeader } from "./form-header"

interface FormPropsUI {
  defaultValue: number;
  handleInputChange: (value: React.SetStateAction<number>) => void;
  handleTextareaChange: (textType: 'textOriginal' | 'textFormatted', value: string | string[]) => void;
  handleTweeterizeButton: () => void;
}

export const Form = (props: FormPropsUI) => (
  <>
    <FormHeader
      defaultValue={props.defaultValue}
      handleInputChange={props.handleInputChange}
    />

    <textarea onInput={(e) => props.handleTextareaChange('textOriginal', e.currentTarget.value)} className="app-text-container" name="text" id="text" placeholder="Insert the text you want to format"></textarea>

    <button className="btn btn-primary px-3 py-2 d-block mx-auto" onClick={props.handleTweeterizeButton}>Tweeterize text</button>
  </>
)
