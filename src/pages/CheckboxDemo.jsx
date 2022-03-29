import React, { useState } from 'react'
import Checkbox from '../components/Checkbox'

const CheckboxDemo = () => {

  const [formData, setFormData] = useState({ fruits: [], colors: [], sendMeEmail: false });

  const handleCheckboxChange = (name, value, checked) => {
    let arr = formData[name];
    const isPresent = arr.includes(value);;
    checked && !isPresent && arr.push(value);
    !checked && isPresent && (arr = arr.filter(x => x !== value));
    setFormData({ ...formData, [name]: arr });
  }


  const seeIfAllColorsChecked = () => {
    return formData.colors.length == ["green", "blue", "red"].length;
  }
  const seeIfColorsIndeterminate = () => {
    return 0 < formData.colors.length && formData.colors.length < ["green", "blue", "red"].length;
  }
  const handleAllColorsSelectorCheckboxChange = (name, value, checked) => {
    if (checked) setFormData({ ...formData, colors: ["green", "blue", "red"] });
    else setFormData({ ...formData, colors: [] });
  }

  const handleSendMeEmailCheckboxChange = (name, value, checked) => {
    setFormData({ ...formData, sendMeEmail: checked });
  }

  return (
    <>
      <h1 className='m-8 text-center'>Custom Checkboxes</h1>
      <div className='m-8'>
        <div className="border-2 border-gray-300 p-4">
          <h4>Select fruit</h4>
          <div>
            <Checkbox label="Apple" id="apple" name="fruits" value="apple" checked={true} onChange={handleCheckboxChange} />
            <Checkbox label="Mango" id="mango" name="fruits" value="mango" onChange={handleCheckboxChange} />
            <Checkbox label="Banana" id="banana" name="fruits" value="banana" onChange={handleCheckboxChange} />
          </div>
          <button onClick={() => alert(formData.fruits.join(", "))}>Submit</button>
        </div>

        <div className="border-2 border-gray-300 p-4">
          <h4>Select colors</h4>
          <Checkbox label="Select/Unselect All" id="select-all-colors" name="colors" value="" checked={seeIfAllColorsChecked()} indeterminate={seeIfColorsIndeterminate()} onChange={handleAllColorsSelectorCheckboxChange} />
          <div>
            <Checkbox label="Green" id="green" name="colors" value="green" checked={formData.colors.includes("green")} onChange={handleCheckboxChange} />
            <Checkbox label="Blue" id="blue" name="colors" value="blue" checked={formData.colors.includes("blue")} onChange={handleCheckboxChange} />
            <Checkbox label="Red" id="red" name="colors" value="red" checked={formData.colors.includes("red")} onChange={handleCheckboxChange} />
          </div>
          <button onClick={() => alert(formData.colors.join(", "))}>Submit</button>
        </div>

        <div className="border-2 border-gray-300 p-4">
          <div>
            <Checkbox label="Send me Email" id="send-me-email" name="send-me-email" onChange={handleSendMeEmailCheckboxChange} />
          </div>
          <button onClick={() => alert("Send me Email? " + formData.sendMeEmail)}>Submit</button>
        </div>
      </div>
    </>
  )
}

export default CheckboxDemo