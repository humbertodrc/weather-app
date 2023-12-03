import { Input } from './Input'
import { Select } from './Select'

export const Form = () => {
  return (
    <div className='contenedor'>
      <div>
        <img src="" alt="" />
      </div>
      <form>
				<div className="campo">
          <Input
            htmlFor="ciudad"
            label="Ciudad"
            id="ciudad"
            name="ciudad"
            value=""
            onChange={() => {}}
          />
				</div>
				<div className="campo">
					<Select />
				</div>
				<input type="submit" value="Consultar Clima" />
			</form>
    </div>
  )
}