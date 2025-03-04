import BackButton from "../components/BackButton";
import { useState } from "react";
import { useNewSupplyChain } from "../hooks/useNewSupplyChain";

const NewSupplyChain = () => {
    const [supplyChainId, setSupplyChainID] = useState('');
    const { newSupplyChain, error, isLoading } = useNewSupplyChain();

    const handleSubmit = async (e) => {
        e.preventDefault()

        await newSupplyChain(supplyChainId);
    }

    return (

        <div className="main-content">
            <div className="row my-5 g-0 align-items-center">
                <span className="col-12 col-md-3">
                    <BackButton />
                </span>
                <h1 className="col-12 col-md-8 heading-1-size">New Supply Chain</h1>
            </div>

            <div className="primary-bg text-white rounded p-4">
                <h2 className="heading-2-size">Supply Chain Details</h2>
                <form className="" id="" onSubmit={handleSubmit}>
                    <div>
                        <label className="heading-4-size">Supply Chain ID</label>
                        <input
                            type="text"
                            onChange={(e) => setSupplyChainID(e.target.value)}
                            value={supplyChainId}
                            className="form-control mb-4"
                            placeholder="e.g SC-000-25"
                        />
                    </div>
                    {/* <button className="button border-0 tertiary-bg text-white rounded text-center py-3 w-100">Create New Supply Chain</button> */}

                    <button disabled={isLoading} className="button border-0 tertiary-bg text-white rounded text-center py-3 w-100">Create New Supply Chain</button>
                    {error && <div className="error">{error}</div>}
                </form>
            </div>

        </div>
    )
}

export default NewSupplyChain;