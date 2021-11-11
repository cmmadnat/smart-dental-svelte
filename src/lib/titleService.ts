import { Title } from './entity/Title';

export const convertCodeToTitle = (code: string): Promise<Title> => {
	return Title.findOneOrFail({ code });
};
