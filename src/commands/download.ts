import * as fs from 'fs';
import axios, { AxiosResponse } from 'axios';
import { CommandOptions } from '../interfaces/command-options';

const itemsPerPage = 100;
const maxPageNumber = 100;

export const download = async (options: CommandOptions): Promise<void> => {
  const authenticatedUser = await loadAuthenticatedUserInfo(options);
  // 公開している記事数
  const itemCount = authenticatedUser.data.items_count;
  let page = 0;
  while (page * itemsPerPage < itemCount) {
    page = page + 1;
    if (page > maxPageNumber) {
      break;
    }
    const authenticatedUserItems = await loadAuthenticatedUserItems(options, page);
    console.log(authenticatedUserItems.data.length);
  }
};

async function loadAuthenticatedUserInfo(options: CommandOptions): Promise<AxiosResponse<any, any>> {
  return axios.get('https://qiita.com/api/v2/authenticated_user', { headers: { Authorization: ['Bearer', options.token].join(' ') } });
}

async function loadAuthenticatedUserItems(options: CommandOptions, page: number = 1): Promise<AxiosResponse<any, any>> {
  return axios.get('https://qiita.com/api/v2/authenticated_user/items', {
    params: {
      per_page: itemsPerPage,
      page: page,
    },
    headers: {
      Authorization: ['Bearer', options.token].join(' '),
    },
  });
}
