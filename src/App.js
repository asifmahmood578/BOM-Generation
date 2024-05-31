import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [inputData, setInputData] = useState([
    { matno_sap: 'BILLET', quantity: '438.745', uom: 'TO', mat_desc: '' },
    { matno_sap: '', quantity: '', uom: '', mat_desc: '' },
    { matno_sap: '', quantity: '', uom: '', mat_desc: '' },
    { matno_sap: '', quantity: '', uom: '', mat_desc: '' },
    { matno_sap: '', quantity: '', uom: '', mat_desc: '' }
  ]);

  const [outputData, setOutputData] = useState([...inputData]);


  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const newData = [...inputData];
    newData[index] = { ...newData[index], [name]: value };
    setInputData(newData);
  };

  useEffect(() => {
    updateOutputData();
  }, [inputData]);

  const updateOutputData = () => {
    setOutputData([...inputData]);
  };

  return (
    <div className="container">
      <div className="header">
        <button className="btn-view">VIEW</button>
        <button className="btn-save">SAVE</button>
        <button className="btn-delete">DELETE</button>
      </div>
      <div className="header-inputs">
        <div className="header-item">
          <label htmlFor="plant">Plant:</label>
          <input type="number" id="plant" placeholder="026" />
        </div>
        <div className="header-item">
          <label htmlFor="mys-no">MYS No:</label>
          <input type="number" id="mys-no" placeholder="40" />
        </div>
      </div>
      <div className="description">
        <div className="description-item large">
          <label>Description:</label>
          <input type="text" placeholder="All Low Carbon Wire Rods EWR, LCEQ, CAQ, Below 24 carbon 11.12" />
        </div>
        <div className="description-item small">
          <label>Plant:</label>
          <input type="number" placeholder="026" />
        </div>
        <div className="description-item small">
          <label>Sec1 min:</label>
          <input type="number" placeholder="11" />
        </div>
        <div className="description-item small">
          <label>Sec1 max:</label>
          <input type="number" placeholder="12" />
        </div>
        <div className="description-item small">
          <label>P Code:</label>
          <input type="text" placeholder="285" />
        </div>
        <div className="description-item small">
          <label>Quantity:</label>
          <input type="number" placeholder="1000" />
        </div>
        <div className="description-item small">
          <label>UOM:</label>
          <input type="text" placeholder="TO" />
        </div>
        <div className="description-item small">
          <label>Qty Code:</label>
          <input type="number" placeholder="" />
        </div>
      </div>

      <div className="master-data">
        <input type="text" value="Master Data" readOnly/>
      </div>
      <div className="data-table">
  <div className="input-data">
    <div className="table-title">Input Data</div>
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>#</th> {/* Add new column for row numbers */}
            <th>Matno_SAP</th>
            <th>Quantity</th>
            <th>UOM</th>
            <th>Mat Desc</th>
          </tr>
        </thead>
        <tbody className='clr-white'>
          {inputData.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td> {/* Row number column */}
              <td><input type="text" className="no-style-input" name="matno_sap" value={row.matno_sap} onChange={(e) => handleChange(e, index)} /></td>
              <td><input type="text" className="no-style-input" name="quantity" value={row.quantity} onChange={(e) => handleChange(e, index)} /></td>
              <td><input type="text" className="no-style-input" name="uom" value={row.uom} onChange={(e) => handleChange(e, index)} /></td>
              <td><input type="text" className="no-style-input" name="mat_desc" value={row.mat_desc} onChange={(e) => handleChange(e, index)} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  <div className="output-data">
    <div className="table-title">Output Data</div>
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>#</th> {/* Add new column for row numbers */}
            <th>Matno_SAP</th>
            <th>Quantity</th>
            <th>UOM</th>
            <th>Mat Desc</th>
          </tr>
        </thead>
        <tbody className='clr-white'>
          {outputData.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td> {/* Row number column */}
              <td>{row.matno_sap}</td>
              <td>{row.quantity}</td>
              <td>{row.uom}</td>
              <td>{row.mat_desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>

      <div className="master-data">
        <input type="text" value="Activity Data" readOnly/>
      </div>
      <div className="activity-data">
        <table>
          <thead>
            <tr>
              <th>Work Center</th>
              <th>Center Seq</th>
              <th>Version</th>
              <th>Act1</th>
              <th>Uom1</th>
              <th>Act2</th>
              <th>Uom2</th>
              <th>Act3</th>
              <th>UOM3</th>
              <th>Act4</th>
              <th>UOM4</th>
              <th>Act5</th>
              <th>UOM5</th>
              <th>Act6</th>
              <th>UOM6</th>
            </tr>
          </thead>
          <tbody className='clr-white'>
            <tr>
              <td>FUR_VRM</td>
              <td>10</td>
              <td>1</td>
              <td>17.81</td>
              <td>H</td>
              <td>0</td>
              <td></td>
              <td>0</td>
              <td></td>
              <td>0</td>
              <td></td>
              <td>0</td>
              <td></td>
              <td>0</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
