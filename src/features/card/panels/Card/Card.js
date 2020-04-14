import React, {Fragment, useEffect, useState, useCallback, memo} from 'react';
import {PanelHeader, PanelSpinner, PanelHeaderBack} from "@vkontakte/vkui/dist/index";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCard } from '../../actions';
import { useRoute } from 'react-router5';
import { getName } from '../../selectors';
import { goBack } from '../../../../app/actions';
import CardContent from '../../components/CardContent/CardContent';

const Card = () => {
    const dispatch = useDispatch();
    const [isLoading, setLoader] = useState(true);
    const { route: { params: { cardId } } } = useRoute();
    const goToColumns = useCallback(() => dispatch(goBack()), [dispatch]);
    const cardName = useSelector(getName);

    useEffect(() => {
      if (cardId) {
        setLoader(true);
        dispatch(fetchCard(cardId)).finally(() => setLoader(false));  
      }
    }, [cardId]);

    return (
      <Fragment>
        <PanelHeader left={<PanelHeaderBack onClick={goToColumns} />}>
          Карточка {cardName ? cardName : ''}
        </PanelHeader>

        {isLoading && <PanelSpinner />}

        <CardContent />

      </Fragment>
    )
};


export default memo(Card);