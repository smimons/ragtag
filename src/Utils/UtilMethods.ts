export function removeIdFromArray(array: any[], id: number): any[] {
  return array.filter((item) => item.id !== id);
}

export function uuid(): number {
  return new Date().valueOf() + Math.floor(Math.random() * 100);
}

export const hasLength = (element: string | any[]): boolean =>
  element?.length > 0;

export const getTotal = (acc: number, value: number): number => acc + value;
