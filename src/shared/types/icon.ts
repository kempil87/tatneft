export interface SpritesMap {
  common:
    | 'add'
    | 'arrow'
    | 'ban'
    | 'basket'
    | 'calendar'
    | 'card-eye'
    | 'checkbox'
    | 'clear'
    | 'clients'
    | 'clip'
    | 'clock'
    | 'close'
    | 'coins'
    | 'collapse'
    | 'computer'
    | 'dashboard'
    | 'deal'
    | 'debt'
    | 'dollar'
    | 'done_circle'
    | 'done'
    | 'edit'
    | 'error'
    | 'eye-off'
    | 'eye'
    | 'file'
    | 'flag'
    | 'form_clear'
    | 'handshake-money'
    | 'handshake'
    | 'home'
    | 'invest'
    | 'light'
    | 'logout'
    | 'long_arrow'
    | 'menu-dots'
    | 'moon'
    | 'notification'
    | 'operation'
    | 'payout'
    | 'people'
    | 'phone'
    | 'revenue'
    | 'search'
    | 'settings'
    | 'sort_arrow'
    | 'spin'
    | 'trash'
    | 'user'
    | 'vault'
    | 'work-time';
}
export const SPRITES_META: {
  [Key in keyof SpritesMap]: {
    filePath: string;
    items: Record<
      SpritesMap[Key],
      {
        viewBox: string;
      }
    >;
  };
} = {
  common: {
    filePath: 'common.b242b53d.svg',
    items: {
      add: {
        viewBox: '0 0 512 512',
      },
      arrow: {
        viewBox: '0 0 22 12',
      },
      ban: {
        viewBox: '0 0 24 24',
      },
      basket: {
        viewBox: '0 0 21 23',
      },
      calendar: {
        viewBox: '0 0 24 24',
      },
      'card-eye': {
        viewBox: '0 0 24 24',
      },
      checkbox: {
        viewBox: '0 0 24 24',
      },
      clear: {
        viewBox: '0 0 21 23',
      },
      clients: {
        viewBox: '0 0 24 24',
      },
      clip: {
        viewBox: '0 0 37 39',
      },
      clock: {
        viewBox: '0 0 24 24',
      },
      close: {
        viewBox: '0 0 10 10',
      },
      coins: {
        viewBox: '0 0 24 24',
      },
      collapse: {
        viewBox: '0 0 256 256',
      },
      computer: {
        viewBox: '0 0 24 24',
      },
      dashboard: {
        viewBox: '0 0 24 24',
      },
      deal: {
        viewBox: '0 0 24 24',
      },
      debt: {
        viewBox: '0 0 24 24',
      },
      dollar: {
        viewBox: '0 0 24 24',
      },
      done: {
        viewBox: '0 0 20 16',
      },
      done_circle: {
        viewBox: '0 0 24 24',
      },
      edit: {
        viewBox: '0 0 24 24',
      },
      error: {
        viewBox: '0 0 24 24',
      },
      eye: {
        viewBox: '0 0 24 24',
      },
      'eye-off': {
        viewBox: '0 0 24 24',
      },
      file: {
        viewBox: '0 0 24 24',
      },
      flag: {
        viewBox: '0 0 24 24',
      },
      form_clear: {
        viewBox: '0 0 24 24',
      },
      handshake: {
        viewBox: '0 0 24 24',
      },
      'handshake-money': {
        viewBox: '0 0 24 24',
      },
      home: {
        viewBox: '0 0 17 19',
      },
      invest: {
        viewBox: '0 0 24 24',
      },
      light: {
        viewBox: '0 0 256 256',
      },
      logout: {
        viewBox: '0 0 24 24',
      },
      long_arrow: {
        viewBox: '0 0 55 24',
      },
      'menu-dots': {
        viewBox: '0 0 24 24',
      },
      moon: {
        viewBox: '0 0 256 256',
      },
      notification: {
        viewBox: '0 0 18 22',
      },
      operation: {
        viewBox: '0 0 24 24',
      },
      payout: {
        viewBox: '0 0 24 24',
      },
      people: {
        viewBox: '0 0 24 24',
      },
      phone: {
        viewBox: '0 0 20 20',
      },
      revenue: {
        viewBox: '0 0 24 24',
      },
      search: {
        viewBox: '0 0 22 22',
      },
      settings: {
        viewBox: '0 0 24 24',
      },
      sort_arrow: {
        viewBox: '0 0 24 24',
      },
      spin: {
        viewBox: '0 0 24 24',
      },
      trash: {
        viewBox: '0 0 24 24',
      },
      user: {
        viewBox: '0 0 256 256',
      },
      vault: {
        viewBox: '0 0 24 24',
      },
      'work-time': {
        viewBox: '0 0 24 24',
      },
    },
  },
};
