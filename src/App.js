import React, { useRef } from 'react';
import { HotTable } from '@handsontable/react';
import 'handsontable/dist/handsontable.full.min.css';
import HyperFormula from 'hyperformula';

function App() {
  const hotRef = useRef(null);
  const hfInstance = HyperFormula.buildEmpty({ licenseKey: 'non-commercial-and-evaluation' });

  return (
    <div>
      <h1>ExcelClone</h1>
      <HotTable
        data={[
          ['', 'Name', 'Score'],
          [1, 'John', 90],
          [2, 'Jane', 95]
        ]}
        colHeaders={true}
        rowHeaders={true}
        formulas={{ engine: hfInstance }}
        width="100%"
        height="600px"
        licenseKey="non-commercial-and-evaluation"
        ref={hotRef}
      />
    </div>
  );
}

export default App;
