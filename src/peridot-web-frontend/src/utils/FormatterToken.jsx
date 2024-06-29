export default function formatterToken(number) {
    const thenumber = number.toString();

    const thedecimal = 8
    const firstnumber = thenumber.substring(0, thenumber.length - thedecimal);
    const lastnumber = thenumber.substring(thenumber.length - thedecimal, thenumber.length);

    // Pisahkan bagian bulat menjadi kelompok tiga angka
    const formatFirstnumber = firstnumber.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    const formatLastnumber = lastnumber.replace(/\B(?=(\d{4})+(?!\d))/g, ',');

    // Gabungkan kembali bagian desimal dan bagian bulat, hilangkan bagian desimal
    const formattedNumber = formatFirstnumber + "," + formatLastnumber;

    return formattedNumber;
}