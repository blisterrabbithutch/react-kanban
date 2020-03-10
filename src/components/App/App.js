import React, { useState, createContext } from 'react';
import { View, Panel, Button } from '@vkontakte/vkui/dist/index';
import '@vkontakte/vkui/dist/vkui.css';
import '../../panels/Columns/Columns.css';
import { panel } from './constants';
import Desks from '../../panels/Desks/Desks.js';
import Columns from '../../panels/Columns/Columns.js';
import Context from "./Context";
import { useAppState} from "./hooks";

const App = () => {
	const state = useAppState();

	return (
		<Context.Provider value={state}>
			<View activePanel={state.activePanel}>
				<Panel separator={false} id={panel.desks}>
					<Desks/>
				</Panel>

				<Panel separator={false} id={panel.columns} className='Columns'>
					{ state.activeDesk &&
					<Columns/>
					}
				</Panel>
			</View>
		</Context.Provider>
	);
};

export default App;

