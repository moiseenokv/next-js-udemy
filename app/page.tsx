import { JSX } from 'react';
import { Htag, Button, Paragraph, Tag } from '@/app/components';

export default function Home(): JSX.Element {
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
		</div>
	);
}
