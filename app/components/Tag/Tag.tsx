import { JSX } from 'react';
import styles from './Tag.module.scss';
import classNames from 'classnames/bind';
import { ITag } from './Tag.props';

export function Tag({ size = 'medium', color = 'ghost', href, children, className, ...restProps }: ITag): JSX.Element {
	const cx = classNames.bind(styles);

	const classNameBuild = cx(
		styles.tag,
		className,
		{
			[styles.medium]: size === 'medium',
			[styles.small]: size === 'small',
		},
		{
			[styles.ghost]: color === 'ghost',
			[styles.red]: color === 'red',
			[styles.grey]: color === 'grey',
			[styles.green]: color === 'green',
			[styles.primary]: color === 'primary'
		}
	);

	return <div className={classNameBuild} {...restProps}>{
		(href)
			? (<a href={href}>{children}</a>)
			: (<>{children}</>)}</div>;
}