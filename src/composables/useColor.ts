import uniqolor from 'uniqolor';

export const useRandomHexColor = ():string => {
  return uniqolor.random().color
}
