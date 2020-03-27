import React, { useState, createContext } from 'react';
import { RouterProvider, useRoute } from 'react-router5';
import '../../panels/Columns/Columns.css';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import App from './App';
import { Provider } from 'react-redux';

const AppContainer = ({router, store }) => {

	return (
		<RouterProvider router={router}>
			<Provider store={store}>
				<ErrorBoundary>
					<App />
				</ErrorBoundary>
			</Provider>
		</RouterProvider>
	);
};

export default AppContainer;

