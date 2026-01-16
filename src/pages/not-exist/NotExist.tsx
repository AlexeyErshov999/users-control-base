import React from 'react';
import { Button, Result } from 'antd';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface NotExistProps {
  title?: string;
  subTitle?: string;
  extra?: ReactNode;
}

export const NotExist = ({
  title = '404',
  subTitle = 'Извините, такая страница не найдена.',
  extra
}: NotExistProps) => {
  return (
    <Result
      status='404'
      title={title}
      subTitle={subTitle}
      extra={
        extra || (
          <Link to='/'>
            <Button type='primary'>Вернуться к списку</Button>
          </Link>
        )
      }
    />
  );
};
