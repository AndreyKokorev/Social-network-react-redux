import styles from './profile.module.scss';

import React, { Fragment } from 'react';

const Profile = () => {
  return (
    <Fragment>
      <div className="upper-background"></div>
      <div className={styles.user}>
        <img
          className={styles.avatar}
          src="https://yandex.ru/images/_crpd/gJlm75B50/65417b5VXfZ/zQD_YiKk1ChFakbG-1VCWIhu2Lvmz-0DEQCWU2Tn6vAZHNyoStoyZpvHZkBpbA0N5t3wD1axvKKpwNkAbpB2Dc1Ha-chc4ZsUOgR0TWbzANDYFZkrtHlCYAUVMYwtHm0yQYHA" />
        <div className={styles.description}></div>
      </div>
      <div className={styles.posts}></div>
    </Fragment>
  );
};

export default Profile;