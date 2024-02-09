import React from "react"
function Api(props) {
    console.log("Data Component", Object.keys(props.data[0]))
    return (
        <>
        <h1>press button to fetch data</h1>
            <table className="table">
                <thead>
                    <tr>
                        {Object.keys(props.data[0]).map((key) => (
                            <th scope="col">{key}</th>
                        ))}

                    </tr>
                </thead>
                <tbody>
                    {props.data.map((data) => (
                        <tr>
                            {Object.keys(data).map((key) => (
                                typeof data[key] === 'object' ?
                                    <td>
                                        {data.address.street}, {data.address.suite},
                                                {data.address.city}, {data.address.zipcode}
                                                </td>
                                                
                                                
                                    :
                                    <td>{data[key]}</td>
                            )
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
export default Api;