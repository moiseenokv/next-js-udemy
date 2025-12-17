'use client';
import { IRating } from './Rating.props';
import classNames from 'classnames/bind';
import styles from './Rating.module.scss';
import StarIcon from './assets/star.svg';
import { useState, KeyboardEvent } from 'react';

export function Rating({
	isEditable = false, rating, setRating, ...restProps
}: IRating) {
	const cx = classNames.bind(styles);
	const [hoverRating, setHoverRating] = useState<number | null>(null);

	const displayRating = hoverRating ?? rating;

	const onMouseHandler = (currRating: number | null) => {
		if (!isEditable) {
			return;
		}
		setHoverRating(currRating);
	};

	const onClickHandler = (currRating: number) => {
		if (!isEditable || !setRating) {
			return;
		}
		setRating(currRating);
	};

	const onSpaceKeyDownHandler = (currRating: number, e: KeyboardEvent<SVGAElement>) => {
		if (!isEditable || !setRating) {
			return;
		}

		if (e.code !== 'Space') {
			return;
		}
		setRating(currRating);
	};

	return (
		<div {...restProps}>
			{new Array(5).fill(null).map((_, i) => (
				<span
					key={i}
					className={cx(styles.star, {
						[styles.filled]: i < displayRating,
						[styles.editable]: isEditable,
					})}
					onMouseEnter={() => onMouseHandler(i + 1)}
					onMouseLeave={() => onMouseHandler(null)}
					onClick={() => onClickHandler(i + 1)}>
					<StarIcon
						tabIndex={isEditable ? 0 : -1}
						onKeyDown={(e: KeyboardEvent<SVGAElement>) => onSpaceKeyDownHandler(i + 1, e)}
					/>
				</span>

			))}
		</div>
	);
}