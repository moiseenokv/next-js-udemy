import { JSX } from 'react';
import { IButton } from './Button.props';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import ArrowIcon from './assets/arrow.svg';

export function Button({ children, appearance, arrow = 'none', className, ...restProps }: IButton): JSX.Element {
	const cx = classNames.bind(styles);
	return <button
		className={cx(styles.button, className, {
			buttonPrimary: appearance === 'primary',
			buttonGhost: appearance === 'ghost'
		})}
		{...restProps}
	>
		{children}
		{arrow !== 'none' && <span className={cx('button', {
			buttonArrowDown: arrow === 'down',
			buttonArrowRight: arrow === 'right'
		})}>
			<ArrowIcon />
		</span>}
	</button>;
}  