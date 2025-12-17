'use client';

import { JSX, useState } from 'react';
import { Htag, Button, Paragraph, Tag, Rating } from '@/app/components';

export default function Home(): JSX.Element {
	const [rating, setRating] = useState<number>(4);
	return (
		<div>
			<Htag tag="h1">Текст</Htag>
			<Button appearance='primary' arrow="right" className='qwe'>Кнопка</Button>
			<Button appearance='ghost' arrow='down'>Кнопка</Button>
			<Paragraph size="medium">
				Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills — навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами. Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.
			</Paragraph>
			<Tag size='medium' color='red'>Red</Tag>
			<Tag size='small' color='green'>Green</Tag>
			<Tag size='medium' color='primary' href='https://google.com'>Primary</Tag>
			<Rating rating={rating} isEditable={true} setRating={setRating} />
		</div>
	);
}
