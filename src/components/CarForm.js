import { useDispatch, useSelector } from "react-redux";
import { addCar, changeCost, changeName } from "../store";



const CarForm = () => {

    const dispatch = useDispatch();
    const { name, cost } = useSelector((state)=> {
        return {
            name: state.form.name,
            cost: state.form.cost
        }
    })
    const handleNameChange = (event) => {
        dispatch(changeName(event.target.value))
    }

    const handleCostChange = (event) => {
        const carConst = parseInt(event.target.value) || 0;
        dispatch(changeCost(carConst));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addCar({ name, cost }));
    }
    return (
        <div className="car-form panel">
            <h4 className="subtitle is-3">Add Car</h4>
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label className="label">Name</label>
                        <input
                            value={name}
                            onChange={handleNameChange}
                            className="input is-expandedz"
                        />
                    </div>
                    <div className="field">
                        <label className="label">Cost</label>
                        <input
                            value={cost || ''}
                            type="number"
                            onChange={handleCostChange}
                            className="input is-expandedz"
                        />
                    </div>
                </div>
                <div className="field">
                    <button className="button is-link">Add</button>
                </div>
            </form>
        </div>
    )
}

export default CarForm;