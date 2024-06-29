export default function FormatterToGeneralToken(number) {
    const thenumber = number.toString();

    const thedecimal = 8
    const firstnumber = thenumber.substring(0, thenumber.length - thedecimal);

    const num = parseInt(firstnumber);
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1) + 'B';
    } else if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    } else {
        return num.toString();
    }
}