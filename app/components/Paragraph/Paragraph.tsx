import { JSX } from 'react/jsx-dev-runtime';
import { IParagraph } from './Paragraph.props';
import classNames from 'classnames/bind';
import styles from './Paragraph.module.scss';

export function Paragraph({ size = 'small', children, className, ...restProps }: IParagraph): JSX.Element {
	const cx = classNames.bind(styles);

	return (
		<p
			className={
				cx(styles.text, className,
					{
						small: size === 'small',
						medium: size === 'medium',
						large: size === 'large',
					})} {...restProps}>{children}</p>);
}