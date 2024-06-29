export default function currentTimeFromNano(number) {
    const currentTimeMilli = Number(number) / 1e6;
    const date = new Date(currentTimeMilli);

    return date.toString();
}