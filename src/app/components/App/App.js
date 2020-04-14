import React, { Fragment, useEffect, memo, lazy, Suspense } from 'react';
import { View, Panel, PanelSpinner } from '@vkontakte/vkui/dist/index';
import { useRoute } from 'react-router5';
import '@vkontakte/vkui/dist/vkui.css';
import '../../../features/columns/panels/Columns/Columns.css';
 
import { useSelector, useDispatch } from 'react-redux';
import { changeRoute } from '../../actions';
import { getActivePanel, getPopout } from '../../selectors';
import { pages } from '../../../router/index';


const Desks = lazy(() => import('../../../features/desks/panels/Desks/Desks.js'));
const Columns = lazy(() => import('../../../features/columns/panels/Columns/Columns.js'));
const Card = lazy(() => import('../../../features/card/panels/Card/Card.js'));

const App = () => {
	const dispatch = useDispatch();
	const activePanel = useSelector(getActivePanel);
	const popout = useSelector(getPopout);

	
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
					<Suspense fallback={<PanelSpinner />}>
						<Desks/>
					</Suspense>
				</Panel>

				<Panel separator={false} id={pages.COLUMNS} className='Columns'>
					<Suspense fallback={<PanelSpinner />}>
						<Columns/>
					</Suspense>
				</Panel>

				<Panel separator={false} id={pages.CARD}>
					<Suspense fallback={<PanelSpinner />}>
						<Card/>
					</Suspense>
				</Panel>
			</View>
		</Fragment>
	);
};

export default memo(App);

