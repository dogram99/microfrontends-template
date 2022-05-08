import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';

import { AppRoutesEnum, AppRoutesTitleEnum } from '../../globalStoreUtils';
import { PROJECT_NAME } from '../../constants/general';
import styles from './Header.module.scss';

export const Header: FC = memo(() => {
  return (
    <div className={styles.Wrapper}>
      <h3 className={styles.Title}>
        <Link to={AppRoutesEnum.HOME}>{PROJECT_NAME}</Link>
      </h3>
      <nav className={styles.Navigation}>
        <Link to={AppRoutesEnum.HOME}>{AppRoutesTitleEnum.HOME}</Link>
        <Link to={AppRoutesEnum.PROFILE}>{AppRoutesTitleEnum.PROFILE}</Link>
        <Link to={AppRoutesEnum.MESSENGER}>{AppRoutesTitleEnum.MESSENGER}</Link>
      </nav>
    </div>
  );
});