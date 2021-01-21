export class Util {
    public static toCamelCase(string: string): string {
        return string
            .split('-')
            .map((word: string, index: number): string => {
                if (index === 0) {
                    return word.toLowerCase();
                }
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            })
            .join('');
    }
}
