'use client';

import classNames from 'classnames';

type Props = {
  size?: number;
  radius?: number;
  offset?: number;
  backgroundColor?: string;
  className?: string;
  classNameChildren?: string;
  children: React.ReactNode;
  [key: string]: any;
};

const Border = ({
  size = 2,
  radius = 8,
  offset = 2,
  backgroundColor = '#fff',
  className,
  classNameChildren,
  children,
  ...props
}: Props) => {
  return (
    <div
      className={classNames('border-primary', className)}
      style={
        {
          '--border-width': `${size}px`,
          '--border-radius': `${radius}px`,
          '--outer-radius-offset': `${offset}px`,
          '--border-background-color': backgroundColor,
        } as React.CSSProperties
      }
      {...props}
    >
      <div className={classNameChildren}>{children}</div>
    </div>
  );
};

export default Border;
