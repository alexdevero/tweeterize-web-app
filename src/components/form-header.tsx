interface FormHeaderUI {
  defaultValue: number;
  handleInputChange: (value: React.SetStateAction<number>) => void;
}

export const FormHeader = (props: FormHeaderUI) => (
  <div className="row mb-2">
    <div className="col-md-6 col-lg-8 text-left">
      <label htmlFor="inputLimit" className="h6 font-weight-normal m-0">Message length limit:</label>
    </div>

    <div className="col-md-6 col-lg-4">
      <input onChange={(e) => props.handleInputChange(+e.currentTarget.value)} type="number" min="0" step="1" className="form-control" id="inputLimit" defaultValue={props.defaultValue} />
    </div>
  </div>
)
