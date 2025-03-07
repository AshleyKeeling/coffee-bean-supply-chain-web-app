import BackButton from "../components/BackButton";
import { useState } from "react";
import { useNewBatch } from "../hooks/useNewBatch";
import { useAuthContext } from '../hooks/useAuthContext';


const NewBatch = () => {
    const [supplyChainId, setSupplyChainID] = useState('');
    const [origin, setOrigin] = useState('');
    const [batchQuantity, setBatchQuantity] = useState('');
    const [processingType, setProcessingType] = useState('Washed');
    const [roastingType, setRoastingType] = useState('Medium');
    const [beanType, setBeanType] = useState('Arabica');

    // Ethereum addresses
    const [farmerAddress, setFarmerAddress] = useState('');
    const [harvestorAddress, setHarvestorAddress] = useState('');
    const [processorAddress, setProcessorAddress] = useState('');
    const [dryingSpecialistAddress, setDryingSpecialistAddress] = useState('');
    const [exporterAddress, setExporterAddress] = useState('');
    const [roasterAddress, setRoasterAddress] = useState('');
    const [packagingSpecialistAddress, setPackagingSpecialistAddress] = useState('');
    const [distributorAddress, setDistributorAddress] = useState('');

    const { newBatch, error, isLoading } = useNewBatch();

    const { user } = useAuthContext();

    const handleSubmit = async (e) => {
        e.preventDefault()

        const participant_Addresses = [
            { role: "Manager", ethereum_address: user.ethereum_address },
            { role: "Farmer", ethereum_address: farmerAddress },
            { role: "Harvestor", ethereum_address: harvestorAddress },
            { role: "Processor", ethereum_address: processorAddress },
            { role: "Drying Specialist", ethereum_address: dryingSpecialistAddress },
            { role: "Exporter", ethereum_address: exporterAddress },
            { role: "Roaster", ethereum_address: roasterAddress },
            { role: "Packaging Specialist", ethereum_address: packagingSpecialistAddress },
            { role: "Distributor", ethereum_address: distributorAddress }
        ];

        // dummy smart contract address for now
        const smart_contract_address = "0xABCDEF1234567890ABCDEF1234567890ABCDEF16"
        await newBatch(smart_contract_address, supplyChainId, origin, batchQuantity, processingType, roastingType, beanType, participant_Addresses)
    }

    return (
        <div className="main-content">
            <div className="row my-5 g-0 align-items-center">
                <span className="col-12 col-md-3">
                    <BackButton />
                </span>
                <h1 className="col-12 col-md-8 heading-1-size">New Batch</h1>
            </div>

            <div className="primary-bg text-white rounded p-4">
                <h2 className="heading-2-size">Batch Details</h2>

                <div class="row mt-3">
                    <div class="col-12">
                        <h5 class="text-white heading-3-size">Smart Contract Details</h5>
                    </div>
                    <div class="col-6 col-md-6">
                        <ul class="text-white list-unstyled heading-4-size">
                            <li>• Creation date</li>
                            <li>• Location</li>
                            <li>• Current holder</li>
                            <li>• Previous stage</li>
                        </ul>
                    </div>
                    <div class="col-6 col-md-6">
                        <ul class="text-white list-unstyled heading-4-size">
                            <li>• Next stage</li>
                            <li>• Status</li>
                            <li>• Latest update</li>
                            <li>• Additional notes</li>
                        </ul>
                    </div>
                </div>


                <form className="" id="" onSubmit={handleSubmit}>
                    <div className="row">
                        <div>
                            <label className="heading-4-size">Supply Chain ID</label>
                            <input
                                type="text"
                                onChange={(e) => setSupplyChainID(e.target.value)}
                                value={supplyChainId}
                                className="form-control mb-3"
                                placeholder="e.g SC-000-25"
                            />
                        </div>

                        <div className="col-12 col-md-6">
                            <label className="heading-4-size">Origin</label>
                            <input
                                type="text"
                                onChange={(e) => setOrigin(e.target.value)}
                                value={origin}
                                className="form-control mb-3"
                                placeholder="e.g Brazil"
                            />
                        </div>

                        <div className="col-12 col-md-6">
                            <label className="heading-4-size">Batch Quantity</label>
                            <input
                                type="text"
                                onChange={(e) => setBatchQuantity(e.target.value)}
                                value={batchQuantity}
                                className="form-control mb-3"
                                placeholder="e.g 3"
                            />
                        </div>

                        <div className="col-12 col-md-6">
                            <label className="heading-4-size">Processing Type</label>
                            <select value={[processingType]} onChange={(e) => setProcessingType(e.target.value)} className="form-select mb-3">
                                <option value="Natural">Natural</option>
                                <option value="Washed">Washed</option>
                                <option value="Honey">Honey</option>
                                <option value="Wet">Wet</option>
                            </select>
                        </div>

                        <div className="col-12 col-md-6">
                            <label className="heading-4-size">Roasting Type</label>
                            <select value={[roastingType]} onChange={(e) => setRoastingType(e.target.value)} className="form-select mb-3">
                                <option value="Light">Light</option>
                                <option value="Medium">Medium</option>
                                <option value="Medium-Dark">Medium-Dark</option>
                                <option value="Dark">Dark</option>
                            </select>
                        </div>

                        <div className="col-12 col-md-6">
                            <label className="heading-4-size">Bean Type</label>
                            <select value={[beanType]} onChange={(e) => setBeanType(e.target.value)} className="form-select mb-3">
                                <option value="Arabica">Arabica</option>
                                <option value="Robusta">Robusta</option>
                                <option value="Liberica">Liberica</option>
                                <option value="Excelsa">Excelsa</option>
                            </select>
                        </div>
                    </div>

                    <hr style={{ border: "none", borderTop: "2px solid white", opacity: 1 }} className="mx-3" />
                    <h5 class="text-white heading-3-size">Ethereum addresses for supply chain participants</h5>

                    <div>
                        <label className="heading-4-size">Cultivation - Farmer</label>
                        <input
                            type="text"
                            onChange={(e) => setFarmerAddress(e.target.value)}
                            value={farmerAddress}
                            className="form-control mb-3"
                            placeholder="e.g 0x1234567890abcdef...."
                        />
                    </div>

                    <div>
                        <label className="heading-4-size">Harvesting - Harvestor</label>
                        <input
                            type="text"
                            onChange={(e) => setHarvestorAddress(e.target.value)}
                            value={harvestorAddress}
                            className="form-control mb-3"
                            placeholder="e.g 0x1234567890abcdef...."
                        />
                    </div>

                    <div>
                        <label className="heading-4-size">Processing - Processor</label>
                        <input
                            type="text"
                            onChange={(e) => setProcessorAddress(e.target.value)}
                            value={processorAddress}
                            className="form-control mb-3"
                            placeholder="e.g 0x1234567890abcdef...."
                        />
                    </div>

                    <div>
                        <label className="heading-4-size">Drying - Drying Specialist</label>
                        <input
                            type="text"
                            onChange={(e) => setDryingSpecialistAddress(e.target.value)}
                            value={dryingSpecialistAddress}
                            className="form-control mb-3"
                            placeholder="e.g 0x1234567890abcdef...."
                        />
                    </div>

                    <div>
                        <label className="heading-4-size">Exporting - Exporter</label>
                        <input
                            type="text"
                            onChange={(e) => setExporterAddress(e.target.value)}
                            value={exporterAddress}
                            className="form-control mb-3"
                            placeholder="e.g 0x1234567890abcdef...."
                        />
                    </div>

                    <div>
                        <label className="heading-4-size">Roasting - Roaster</label>
                        <input
                            type="text"
                            onChange={(e) => setRoasterAddress(e.target.value)}
                            value={roasterAddress}
                            className="form-control mb-3"
                            placeholder="e.g 0x1234567890abcdef...."
                        />
                    </div>

                    <div>
                        <label className="heading-4-size">Packaging - Packaging Specialist</label>
                        <input
                            type="text"
                            onChange={(e) => setPackagingSpecialistAddress(e.target.value)}
                            value={packagingSpecialistAddress}
                            className="form-control mb-3"
                            placeholder="e.g 0x1234567890abcdef...."
                        />
                    </div>

                    <div>
                        <label className="heading-4-size">Distribution - Distributor</label>
                        <input
                            type="text"
                            onChange={(e) => setDistributorAddress(e.target.value)}
                            value={distributorAddress}
                            className="form-control mb-4"
                            placeholder="e.g 0x1234567890abcdef...."
                        />
                    </div>

                    <button disabled={isLoading} className="button border-0 tertiary-bg text-white rounded text-center py-3 w-100">Create New Supply Chain</button>
                    {error && <div className="error">{error}</div>}
                </form>
            </div>

        </div>
    )
}

export default NewBatch;