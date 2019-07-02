export class Utils {

  public static sortObjectArrayAlphabetically(array: any[], by: string): any[] {
    return array.sort((a, b) => (a[by] > b[by]) ? 1 : ((b[by] > a[by]) ? -1 : 0));
  }
}
