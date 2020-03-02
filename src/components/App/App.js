import React, { useState } from 'react';
import { View, Panel, Button } from '@vkontakte/vkui/dist/index';
import '@vkontakte/vkui/dist/vkui.css';
import '../../panels/Columns/Columns.css';

import Desks from '../../panels/Desks/Desks.js';
import Columns from '../../panels/Columns/Columns.js';

const panel = {
	desks: 'desks',
	columns: 'columns',
};

const App = () => {
	const [activePanel, setActivePanel] = useState(panel.desks);
	const [activeDesk, setActiveDesk] = useState(null);
	const goToColumns = (deskId) => {
		setActiveDesk(desks.find(({id}) => id === deskId));
		setActivePanel(panel.columns);
	};
	const goToDesks = () => {
		setActivePanel(panel.desks);
	};

	// Доски
	const [desks, setDesks] = useState([]);
	const addDesk = (desk) => setDesks([...desks, desk]);
	const removeDesk = (removeId) => setDesks(desks.filter(({ id }) => id !== removeId));

	// Колонки
	const [columns, setColumns] = useState([]);
	const addColumn = (column) => setColumns([...columns, column]);
	const removeColumn = (removeId) => setColumns(columns.filter(({ id }) => id !== removeId));

	return (
		<View activePanel={activePanel}>
			<Panel separator={false} id={panel.desks}>
				<Desks
					onChangePanel={goToColumns}
					setDesks={setDesks}
					addDesk={addDesk}
					removeDesk={removeDesk}
					desks={desks}
				/>
			</Panel>

			<Panel separator={false} id={panel.columns} className='Columns'>
				{ activeDesk &&
				<Columns
					desk={activeDesk}
					goBack={goToDesks}
					addColumn={addColumn}
					columns={columns}
					removeColumn={removeColumn}
					setColumns={setColumns}
				/>
				}
			</Panel>
		</View>
	);
}

export default App;

