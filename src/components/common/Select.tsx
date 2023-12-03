import { OPTIONSCOUNTRY } from '../../constants/options'

export const Select = () => {
  return (
    <>
      <label htmlFor="pais">País</label>
      <select name="pais" id="pais">
        {OPTIONSCOUNTRY.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
          ))}
      </select>
    </>
  )
}