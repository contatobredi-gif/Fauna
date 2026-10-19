/**
 * Eventos e palestras do polo Barcarena.
 * A versão anterior (fauna-frontend-six) listava eventos de Belém.
 * Esses registros não são republicados aqui como agenda de Barcarena.
 */

export interface FaunaEvent {
  id: string;
  name: string;
  date: string;
  location: string;
  description: string;
  image?: string;
  category: string;
  detailsUrl?: string;
  status: 'confirmado' | 'em_programacao';
}

export const EVENTS_DATA: FaunaEvent[] = [];
