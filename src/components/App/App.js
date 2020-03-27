import React, { Fragment, useState, createContext, useEffect } from 'react';
import { View, Panel, Button } from '@vkontakte/vkui/dist/index';
import { useRouter, useRoute } from 'react-router5';
import '@vkontakte/vkui/dist/vkui.css';
import '../../panels/Columns/Columns.css';
import Desks from '../../panels/Desks/Desks.js';
import Columns from '../../panels/Columns/Columns.js';
import { useAppState } from "./hooks";
import { pages } from '../../router';
import { useSelector, useDispatch } from 'react-redux';
import { changeRoute } from '../../actions/actions';

const App = () => {
	const dispatch = useDispatch();
	const activePanel = useSelector((state) => state.activePanel);
	const popout = useSelector((state) => state.popout);

	
	const {router, route} = useRoute();
 
	
	useEffect(() => {
		router.subscribe((...args) => dispatch(changeRoute(...args)));

		dispatch(changeRoute({route}));
	}, [dispatch]);

	if (!activePanel) {
		return null;
	}

	return (
		<Fragment>
			<View activePanel={activePanel} popout={popout}>
				<Panel separator={false} id={pages.DESKS}>
					<Desks/>
				</Panel>

				<Panel separator={false} id={pages.COLUMNS} className='Columns'>
					<Columns/>
				</Panel>
			</View>
		</Fragment>
	);
};

export default App;

