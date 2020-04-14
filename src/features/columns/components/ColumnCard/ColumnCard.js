import React, { useCallback, memo } from 'react';
import {Card, Div} from "@vkontakte/vkui/dist/index";
import PropTypes from 'prop-types';
import '../../../columns/panels/Columns/Columns.css';
import './ColumnCard.css';
import {api} from "../../../../api/firebase";
import {useDispatch} from 'react-redux';
import { deleteCard } from '../../../cards/actions';
import { pages } from '../../../../router/index'; 
import { useRouter } from 'react-router5';

const ColumnCard = ({children, id }) => {
  const router = useRouter();
  const goToCardPage = useCallback(() => router.navigate(pages.CARD, {cardId: id}), [router, id]);

  return (
    <Card size='l' className=""  mode='outline' onClick={goToCardPage}>
      <Div className="ColumnCard__wrapper">
        {children}
      </Div>
    </Card>
  );
};

ColumnCard.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default memo(ColumnCard);